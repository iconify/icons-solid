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

.s8thi1btf {
  d: path("M5 4.5a2 2 0 0 1 2-2h7.5L19 7v12.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z");
}

.z9zjccc4w {
  d: path("M14.5 2.5V7H19M8 16a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0m5 0V9.75");
}
</style><g class="hntgybcog"><path class="s8thi1btf"/><path class="z9zjccc4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sight-reading"} {...others} />);
}

export default Component;
