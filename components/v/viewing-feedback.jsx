import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7lb1qb2r {
  d: path("M5 2.5h14A2.5 2.5 0 0 1 21.5 5v9.5A2.5 2.5 0 0 1 19 17h-4.5L12 20.5L9.5 17H5a2.5 2.5 0 0 1-2.5-2.5V5A2.5 2.5 0 0 1 5 2.5Z");
}

.so7ltebpj {
  d: path("m12 5.75l1.176 2.382l2.628.382l-1.902 1.854l.449 2.618L12 11.75l-2.351 1.236l.449-2.618l-1.902-1.854l2.628-.382Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c7lb1qb2r"/><path class="so7ltebpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:viewing-feedback"} {...others} />);
}

export default Component;
