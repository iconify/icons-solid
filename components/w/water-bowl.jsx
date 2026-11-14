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

.posqoj8pk {
  d: path("M3 6.5h18a9 9 0 0 1-18 0m6 12h6");
}

.yz_4d5byv {
  d: path("M7.5 10.5q1.5-1.25 3 0t3 0t3 0");
}
</style><g class="hntgybcog"><path class="posqoj8pk"/><path class="yz_4d5byv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:water-bowl"} {...others} />);
}

export default Component;
