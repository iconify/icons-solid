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

.jq0kgrbmn {
  d: path("M13 3.25a8 8 0 0 1 7 12l-7-4Z");
}

.ye3_gfbdr {
  d: path("M10.5 4.75a8 8 0 1 0 7 12l-7-4Z");
}
</style><g class="hntgybcog"><path class="ye3_gfbdr"/><path class="jq0kgrbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:vote-pie"} {...others} />);
}

export default Component;
