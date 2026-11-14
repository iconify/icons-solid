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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.z5ezmb_7o {
  d: path("M9.907 7h4.186a1.5 1.5 0 0 1 1.492 1.649l-.7 7A1.5 1.5 0 0 1 13.393 17h-2.786a1.5 1.5 0 0 1-1.492-1.351l-.7-7A1.5 1.5 0 0 1 9.907 7M8.75 11h6.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="z5ezmb_7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drink-token"} {...others} />);
}

export default Component;
