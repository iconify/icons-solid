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

.ihcpm4bwa {
  d: path("M3.75 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M6 8.5L5.5 14L4 21.5M5.5 14L7 21.5M9 18a2.75 2.75 0 1 0 5.5 0A2.75 2.75 0 1 0 9 18m7.5 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.nzucgldmc {
  d: path("M11.75 18H15l3-5l1.25 5M15 18l-1.5-5H18");
}
</style><g class="hntgybcog"><path class="ihcpm4bwa"/><path class="nzucgldmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:active-travel"} {...others} />);
}

export default Component;
