import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d5v-ukklf {
  d: path("M2.5 12a9.5 5 0 1 0 19 0a9.5 5 0 1 0-19 0");
}

.gobhwybjh {
  d: path("m7.5 5.5l2.25 4L8 12l3.5 2.5l-1.5 4m4-5.5l2.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d5v-ukklf"/><path class="gobhwybjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:frozen-pond"} {...others} />);
}

export default Component;
