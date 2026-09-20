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

.k2jzr9u7f {
  d: path("M5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.qju4uubmq {
  d: path("M15 5h6v9h-6Z");
}

.qnck32bfn {
  d: path("M4 16a4 4 0 0 1 8 0");
}
</style><g class="hntgybcog"><path class="k2jzr9u7f"/><path class="qnck32bfn"/><path class="qju4uubmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:referee-outline-thin"} {...others} />);
}

export default Component;
