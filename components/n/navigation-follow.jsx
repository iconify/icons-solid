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

.tgb0iuqku {
  d: path("m13.402 10.18l1.758 4.616a.792.792 0 0 1-1.16.954l-1.205-.753a1.5 1.5 0 0 0-1.59 0L10 15.75a.792.792 0 0 1-1.16-.954l1.758-4.616a1.5 1.5 0 0 1 2.804 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="tgb0iuqku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:navigation-follow"} {...others} />);
}

export default Component;
