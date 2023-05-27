import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import mdx from "@astrojs/mdx"
import unocss from "unocss/astro"
import { FontaineTransform } from "fontaine"
import vesper from "./src/lib/vesper.json"

export default defineConfig({
  integrations: [
    mdx(),
    unocss({ injectReset: true }),
    vue(),
  ],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  markdown: { shikiConfig: { theme: vesper, wrap: true } },
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: ["BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Arial", "Noto Sans"],
        resolvePath: id => new URL(`./public${id}`, import.meta.url),
      }),
    ],
  },
})
