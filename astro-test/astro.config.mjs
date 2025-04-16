// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: "nc6vhdzl",
      dataset: "production",
      useCdn: false, // for static builds
    }),
  ],
});
