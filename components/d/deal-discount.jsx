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

.m0gxfb3hd {
  d: path("M3 3h8l10 10l-8 8L3 11Z");
}

.nyxdl03dt {
  d: path("M5.75 7a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.75 7.5l4-4m-5-.5h.01M15 14.5h.01");
}
</style><g class="hntgybcog"><path class="m0gxfb3hd"/><path class="nyxdl03dt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:deal-discount"} {...others} />);
}

export default Component;
