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

.lyiugkbct {
  d: path("M5.75 12.5zA2.25 2.25 0 0 1 8 14.75v2.5a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25v-2.5a2.25 2.25 0 0 1 2.25-2.25m12.5 0za2.25 2.25 0 0 1 2.25 2.25v2.5a2.25 2.25 0 0 1-2.25 2.25A2.25 2.25 0 0 1 16 17.25v-2.5a2.25 2.25 0 0 1 2.25-2.25");
}

.ukg0kpkum {
  d: path("M4.5 13v-1a7.5 7.5 0 0 1 15 0v1");
}
</style><g class="hntgybcog"><path class="ukg0kpkum"/><path class="lyiugkbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:audio-guide"} {...others} />);
}

export default Component;
