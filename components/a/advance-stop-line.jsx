import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0oujsbop {
  d: path("M2.75 13.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m11 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s6-dw5boq {
  d: path("M6.5 13.25h4l-2-4.5m-1 0h2m1 4.5l4-4.5l3 4.5m-3-4.5L14 7h1.5m-13 10h19");
}
</style><g class="hntgybcog"><path class="b0oujsbop"/><path class="s6-dw5boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:advance-stop-line"} {...others} />);
}

export default Component;
