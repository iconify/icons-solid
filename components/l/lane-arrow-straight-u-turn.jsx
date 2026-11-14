import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cv49yqkag {
  d: path("M15.5 21.5V3m-5 5l5-5l5 5m-5 4h-6a4 4 0 0 0-4 4v4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s8epzqb0c {
  d: path("m3 18l2.5 2.5L8 18");
}
</style><g class="hntgybcog"><path class="cv49yqkag"/><path class="s8epzqb0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lane-arrow-straight-u-turn"} {...others} />);
}

export default Component;
