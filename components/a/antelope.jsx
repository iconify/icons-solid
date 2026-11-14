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

.oiv290bmn {
  d: path("m3 9l2-2.5l2 1L9.5 11H17c1.5 0 2.5 1 2.5 2.5s-1 2-2.5 2h-7c-1 0-1.75-1-2-2L5.5 10l-2 .25Z");
}

.z1jlbeevl {
  d: path("M5.5 6.75C5.5 4 7 2.5 9.5 2.5m1 13v6m7-6v6m1.75-9.25l1.5 1.75");
}
</style><g class="hntgybcog"><path class="oiv290bmn"/><path class="z1jlbeevl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:antelope"} {...others} />);
}

export default Component;
