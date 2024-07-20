import {build} from 'bun'

await build({
    entrypoints:['./src/safari-x/safari-x.ts'],
    outdir:'./dist',
    minify:true,
})