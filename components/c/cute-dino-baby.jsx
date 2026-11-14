import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.byz8zcc3k {
  d: path("M4.5 13L7 15l2.5-2.5L12 15l2.5-2.5L17 15l2.5-2c0 5-3 8.5-7.5 8.5S4.5 18 4.5 13Z");
}

.l3r_hhb2m {
  d: path("M8 14V8c0-3.5 2.5-5.5 6-5.5s6 2 6 4.5c0 2-1.5 3-3.5 3h-2v2.5m-2.5-6h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="byz8zcc3k"/><path class="l3r_hhb2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cute-dino-baby"} {...others} />);
}

export default Component;
