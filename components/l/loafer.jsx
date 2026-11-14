import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.avs7pybtk {
  d: path("M2.5 17.5v-10l5 2l4-3q6.5 1 9 5.25q1 1.75 1 3.5v2.25Zm0-2.25h19");
}

.bwqn15byx {
  d: path("M10.25 7.5Q13.5 12 17 8.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="avs7pybtk"/><path class="bwqn15byx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:loafer"} {...others} />);
}

export default Component;
