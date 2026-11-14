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

.yu98p6lrm {
  d: path("M18.5 12c0 4-4 3.5-5 6s2 3.75 8 2.75");
}

.zgsiffvcq {
  d: path("M3.5 12.5c0-5 3.5-8.5 8-8.5s8 3.5 8 8h-2c0-3.5-2.5-6-6-6s-6 3-8 6.5m15-3v1");
}
</style><g class="hntgybcog"><path class="zgsiffvcq"/><path class="yu98p6lrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:suture-needle"} {...others} />);
}

export default Component;
