import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Defaults to '/' for local preview and standard root hosting (Vercel, Netlify, Render).
  // Automatically uses '/EventEase/' when VITE_BASE_PATH is provided (e.g. by GitHub Actions for GitHub Pages).
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
})
