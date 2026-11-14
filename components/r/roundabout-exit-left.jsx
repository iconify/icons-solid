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

.i1y2_jbml {
  d: path("M6.5 7.25L4.25 9.5l2.25 2.25M14 14.5a5 5 0 0 1-4-2");
}

.whl0dcc0b {
  d: path("M14 21.5v-7a5 5 0 1 0-5-5H4.25");
}
</style><g class="hntgybcog"><path class="whl0dcc0b"/><path class="i1y2_jbml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:roundabout-exit-left"} {...others} />);
}

export default Component;
