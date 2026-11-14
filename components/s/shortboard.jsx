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

.q7eexkvah {
  d: path("m14 14l3.5 4.5l-3.75-.5");
}

.w13lzbngb {
  d: path("M10.5 3.5C14.5 8 15 15 13 20.5H8C6 15 6.5 8 10.5 3.5");
}
</style><g class="hntgybcog"><path class="w13lzbngb"/><path class="q7eexkvah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:shortboard"} {...others} />);
}

export default Component;
