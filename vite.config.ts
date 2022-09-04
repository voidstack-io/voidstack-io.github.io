import * as path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import {webfontDownload} from 'vite-plugin-webfont-dl'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import progress from 'vite-plugin-progress'

import manifest from './manifest.json'

export default defineConfig({
  plugins: [
    progress(),
    eslintPlugin(),
    react(),
    webfontDownload(),
    chunkSplitPlugin(),
    VitePWA({
      manifest,
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: false
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
