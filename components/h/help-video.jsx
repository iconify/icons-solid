import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ey-6sbcew {
  d: path("M6.875 3h10.25A4.375 4.375 0 0 1 21.5 7.375v5.25A4.375 4.375 0 0 1 17.125 17H6.875A4.375 4.375 0 0 1 2.5 12.625v-5.25A4.375 4.375 0 0 1 6.875 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-_z5ut7s {
  d: path("m12.059 7.477l1.967 1.26a1.5 1.5 0 0 1 0 2.526l-1.967 1.26a1.5 1.5 0 0 1-2.309-1.264V8.741a1.5 1.5 0 0 1 2.309-1.264M8.5 20.5h7");
}
</style><g class="hntgybcog"><path class="ey-6sbcew"/><path class="y-_z5ut7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:help-video"} {...others} />);
}

export default Component;
