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

.jwaii3pfa {
  d: path("M11.25 2.5h8.5a1.75 1.75 0 0 1 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75h-8.5a1.75 1.75 0 0 1-1.75-1.75V4.25a1.75 1.75 0 0 1 1.75-1.75");
}

.t0bh40b3u {
  d: path("M14.25 6h2.5a1.75 1.75 0 0 1 1.75 1.75v8.5A1.75 1.75 0 0 1 16.75 18h-2.5a1.75 1.75 0 0 1-1.75-1.75v-8.5A1.75 1.75 0 0 1 14.25 6M2.5 12H7m-2-2l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="jwaii3pfa"/><path class="t0bh40b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:push-door-sign"} {...others} />);
}

export default Component;
