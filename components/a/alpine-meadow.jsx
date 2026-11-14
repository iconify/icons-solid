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

.i3hu9d5_g {
  d: path("M8.5 20q5.5-8.5 13-6m-7.75 3.25h.01m4.24 0h.01");
}

.m6se56bni {
  d: path("M2.5 20h19m-19 0L10 4l5 10");
}
</style><g class="hntgybcog"><path class="m6se56bni"/><path class="i3hu9d5_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:alpine-meadow"} {...others} />);
}

export default Component;
