import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../docs', import.meta.url)),
    setupTimeout: 120000,
  })

  it('renders the index page', { timeout: 120000 }, async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    console.log(html)
    expect(html).toContain('Add Storybook')
  })
})
