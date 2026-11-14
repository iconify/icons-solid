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

.mf6mhemtg {
  d: path("m12.5 7.875l.172.473a1.5 1.5 0 0 0 1.285.982l.623.052a.556.556 0 0 1 .295.993l-.354.275a1.5 1.5 0 0 0-.534 1.548l.143.572a.57.57 0 0 1-.88.605l-.39-.273a1.5 1.5 0 0 0-1.72 0l-.39.273a.57.57 0 0 1-.88-.605l.143-.572a1.5 1.5 0 0 0-.534-1.548l-.354-.275a.556.556 0 0 1 .295-.993l.623-.052a1.5 1.5 0 0 0 1.285-.982l.172-.473a.532.532 0 0 1 1 0");
}

.z-38ibbnv {
  d: path("M5 3.5h14A2.5 2.5 0 0 1 21.5 6v9a2.5 2.5 0 0 1-2.5 2.5h-9L5.5 21v-3.5H5A2.5 2.5 0 0 1 2.5 15V6A2.5 2.5 0 0 1 5 3.5");
}
</style><g class="hntgybcog"><path class="z-38ibbnv"/><path class="mf6mhemtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:citizen-feedback"} {...others} />);
}

export default Component;
