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

.ojk58ub1b {
  d: path("M7 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.x88o4sukv {
  d: path("m9.752 6.935l3.25 1.882a1.5 1.5 0 0 1 .748 1.298v3.77a1.5 1.5 0 0 1-.748 1.298l-3.25 1.882a1.5 1.5 0 0 1-1.504 0l-3.25-1.882a1.5 1.5 0 0 1-.748-1.298v-3.77a1.5 1.5 0 0 1 .748-1.298l3.25-1.882a1.5 1.5 0 0 1 1.504 0M13.75 9.25l3-1.75l3 1.75v3.25");
}
</style><g class="hntgybcog"><path class="x88o4sukv"/><path class="ojk58ub1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dopamine"} {...others} />);
}

export default Component;
