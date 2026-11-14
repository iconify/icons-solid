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

.mbdvj2b_d {
  d: path("M6.25 2.5h11.5a1.75 1.75 0 0 1 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 6.25 2.5");
}

.qp0-1mbog {
  d: path("M9 6h6a1.5 1.5 0 0 1 1.5 1.5V9a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 9V7.5A1.5 1.5 0 0 1 9 6m-1.5 8.25h9M7.5 18h6");
}
</style><g class="hntgybcog"><path class="mbdvj2b_d"/><path class="qp0-1mbog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:campaign-flyer"} {...others} />);
}

export default Component;
