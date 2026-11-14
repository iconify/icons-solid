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

.qq7-785rg {
  d: path("M14 2.5L8.5 16h-4a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h6a1.5 1.5 0 0 0 1.5-1l5-16Zm1 14a3.25 1.75 0 1 0 6.5 0a3.25 1.75 0 1 0-6.5 0");
}

.rjr10ffwn {
  d: path("M15 16.5v2a3.25 1.75 0 0 0 6.5 0v-2");
}
</style><g class="hntgybcog"><path class="qq7-785rg"/><path class="rjr10ffwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-hockey"} {...others} />);
}

export default Component;
