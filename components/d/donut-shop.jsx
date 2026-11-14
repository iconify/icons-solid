import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bz7fw4b3k {
  d: path("M2.5 13a9.5 7 0 1 0 19 0a9.5 7 0 1 0-19 0");
}

.cpe9zcbut {
  d: path("M8.5 11a3.5 1.75 0 1 0 7 0a3.5 1.75 0 1 0-7 0M3 13.5q2 3.5 4.5 2q2.5 2 4.5.5q2 1.5 4.5-.5q2.5 1.5 4.5-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bz7fw4b3k"/><path class="cpe9zcbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:donut-shop"} {...others} />);
}

export default Component;
