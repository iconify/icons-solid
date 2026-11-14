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

.ii612obwb {
  d: path("M2.5 16.5V13L4 10.5h4l2.5 2.75v3.25Zm11 0V13l1.5-2.5h4l2.5 2.75v3.25Z");
}

.rfhptmble {
  d: path("M3 17.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M7 6.25h10M8.75 4.5L7 6.25L8.75 8m6.5-3.5L17 6.25L15.25 8");
}
</style><g class="hntgybcog"><path class="ii612obwb"/><path class="rfhptmble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:interval-gap"} {...others} />);
}

export default Component;
