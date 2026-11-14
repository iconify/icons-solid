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

.m33ss0bea {
  d: path("M18 2.5V6h-3.5");
}

.tkrcfhgkm {
  d: path("M20.5 12A8.5 8.5 0 1 1 18 6");
}
</style><g class="hntgybcog"><path class="tkrcfhgkm"/><path class="m33ss0bea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:debug-restart"} {...others} />);
}

export default Component;
