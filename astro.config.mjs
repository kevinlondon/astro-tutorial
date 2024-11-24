import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://astro-tutorial-kl.netlify.app",
  integrations: [preact()]
});