import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.guyplobse {
  d: path("M10 21.5v-11a2 2 0 0 1 4 0v4h3a2 2 0 0 1 2 2v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.omqe-motk {
  d: path("M7 11.5a5 5 0 1 1 10 0");
}

.zdli8kbcg {
  d: path("M4.25 12a8 8 0 1 1 15.5 0");
}
</style><g class="hntgybcog"><path class="guyplobse"/><path class="omqe-motk"/><path class="zdli8kbcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:air-tap"} {...others} />);
}

export default Component;
