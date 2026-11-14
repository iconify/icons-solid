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

.mxwnu6hhk {
  d: path("M9.5 12.5c0-3 2-4.75 5-4.75c0 3-2 4.75-5 4.75");
}

.uqdg99bde {
  d: path("M9 16.5c0-1.75-3-3.25-3-7a6 6 0 0 1 12 0c0 3.75-3 5.25-3 7Zm.5 3.25h5");
}
</style><g class="hntgybcog"><path class="uqdg99bde"/><path class="mxwnu6hhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:energy-saving-tip"} {...others} />);
}

export default Component;
