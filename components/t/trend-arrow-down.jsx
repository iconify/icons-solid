import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u0--oacrk {
  d: path("M3 5c7 0 12 8 17 13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v9x-dtmmv {
  d: path("M15 18h5v-5");
}
</style><g class="ulnmmdpxh"><path class="u0--oacrk"/><path class="v9x-dtmmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:trend-arrow-down"} {...others} />);
}

export default Component;
