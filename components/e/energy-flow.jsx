import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c8odecn_d {
  d: path("M10.25 15.75L8 18l2.25 2.25");
}

.fv_zzcbew {
  d: path("M13.25 5.25L15.5 7.5l-2.25 2.25m5.25.75v3A4.5 4.5 0 0 1 14 18H8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t7st8rc9l {
  d: path("M2.5 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m13 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-7 0h7");
}
</style><g class="hntgybcog"><path class="t7st8rc9l"/><path class="fv_zzcbew"/><path class="c8odecn_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:energy-flow"} {...others} />);
}

export default Component;
