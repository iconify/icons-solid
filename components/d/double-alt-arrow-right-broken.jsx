import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ggrp1gbkp {
  d: path("M7 5L13 12L11.5 13.75M7 19L9 16.6667");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjnva_byo {
  d: path("M11 19L17 12L15.5 10.25M11 5L13 7.33333");
}
</style><g class="hntgybcog"><path class="zjnva_byo"/><path class="ggrp1gbkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-right-broken"} {...others} />);
}

export default Component;
