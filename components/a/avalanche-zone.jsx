import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-t64-_xz {
  d: path("M7.5 10.25L9.25 12L11 10.5l2-.25m-7.279 8.568a6.5 6.5 0 0 1 2.101-3.297m2.496-1.3a6.5 6.5 0 0 1 3.364 0m2.496 1.3a6.5 6.5 0 0 1 2.101 3.297");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ulk6tbbid {
  d: path("M2.5 20L10 5.5l3.5 5.5l2-2.5l6 11.5");
}
</style><g class="hntgybcog"><path class="ulk6tbbid"/><path class="g-t64-_xz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:avalanche-zone"} {...others} />);
}

export default Component;
