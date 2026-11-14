import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u0--oacrk {
  d: path("M3 5c7 0 12 8 17 13");
}

.v9x-dtmmv {
  d: path("M15 18h5v-5");
}
</style><g class="hntgybcog"><path class="u0--oacrk"/><path class="v9x-dtmmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:trend-arrow-down"} {...others} />);
}

export default Component;
