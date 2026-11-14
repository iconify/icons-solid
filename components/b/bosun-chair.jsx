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

.i5glcvhqr {
  d: path("M4 21.5v-18h11v8m-4 4l4-4l4 4");
}

.u6462pzyd {
  d: path("M11.5 15.5h7A1.5 1.5 0 0 1 20 17a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 10 17a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="i5glcvhqr"/><path class="u6462pzyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bosun-chair"} {...others} />);
}

export default Component;
