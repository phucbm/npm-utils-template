import {defineConfig} from 'tsup';
import pkg from './package.json';

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * @license ${pkg.license}
 */
`;

export default defineConfig([
    // ESM build
    {
        entry: ['src/index.ts'],
        outDir: 'dist',
        format: ['esm'],
        target: 'es2020',
        platform: 'neutral',
        bundle: true,
        minify: false,
        sourcemap: true,
        dts: true,
        clean: true,
        outExtension: () => ({js: '.js'}),
        banner: {js: banner},
        onSuccess: async () => {
            console.log('✅ ESM build completed');
            console.log(`\n🎉 ${pkg.description} v${pkg.version} - Build completed successfully!\n`);
            console.log(`📦 Generated files:`);
            console.log(`   • dist/index.js`);
            console.log(`   • dist/index.d.ts\n`);
        }
    }
]);
