import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gz4-wob7d {
  d: path("M10.5 4.25v-2h3v2m-3 6.5a2.25 2.25 0 1 1 3 0a2.25 2.25 0 1 1 1 2.75a2.25 2.25 0 1 1-2.5 1.75a2.25 2.25 0 1 1-2.5-1.75a2.25 2.25 0 1 1 1-2.75Z");
}

.l3tv1vxtb {
  d: path("M3.25 12.75a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 1 0-17.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l3tv1vxtb"/><path class="gz4-wob7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:embroidery-design"} {...others} />);
}

export default Component;
