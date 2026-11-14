import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s_s6-zb0b {
  d: path("M17 15.793V9.5l2.25 1l1.75-4l-5.5-3c-.75 1.5-2 2.25-3.5 2.25S9.25 5 8.5 3.5L3 6.5l1.75 4L7 9.5v11h6.307");
}
</style><g class="hntgybcog"><path class="s_s6-zb0b"/><path class="e9fltbcec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:laundry-done"} {...others} />);
}

export default Component;
