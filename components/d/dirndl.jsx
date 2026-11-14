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

.lhy1nqj-c {
  d: path("M7.5 2.5H10q2 4 4 0h2.5V7l-1 4l5 9.5q-8.5 2-17 0l5-9.5l-1-4Z");
}

.z19dtwbcw {
  d: path("m12 11l-1.75-1.5v3Zm0 0l1.75-1.5v3Z");
}
</style><g class="hntgybcog"><path class="lhy1nqj-c"/><path class="z19dtwbcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dirndl"} {...others} />);
}

export default Component;
