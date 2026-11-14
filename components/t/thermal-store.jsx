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

.nfm6lrb4u {
  d: path("M6 5v14a6 2 0 0 0 12 0V5");
}

.rd2nzflbv {
  d: path("M6 5a6 2 0 1 0 12 0A6 2 0 1 0 6 5");
}

.y4p_12bzv {
  d: path("M9 13q1.5-1.5 3 0t3 0m3-3.5h3.5m-19 8H6");
}
</style><g class="hntgybcog"><path class="rd2nzflbv"/><path class="nfm6lrb4u"/><path class="y4p_12bzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:thermal-store"} {...others} />);
}

export default Component;
