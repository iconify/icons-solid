import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.doa0urb5r {
  d: path("M2.5 12c2.5-1 4.5 1 7 0s4.5 1 7 0c2-.75 3.5.5 5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v1sw4xe_d {
  d: path("M4 15.5v-7h3.5v7m2.75 0v-7h3.5v7m2.75 0v-7H20v7");
}
</style><g class="hntgybcog"><path class="doa0urb5r"/><path class="v1sw4xe_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:surgical-staples"} {...others} />);
}

export default Component;
