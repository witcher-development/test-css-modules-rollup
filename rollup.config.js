import { rollup } from 'rollup';
import scss from 'rollup-plugin-scss';
import css from '@modular-css/rollup';

export default {
  input: './index.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    css(),
    // scss(),
  ],
};
