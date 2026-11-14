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

.s8lgvbkjx {
  fill: currentColor;
  d: path("M10.5 7c-3-.5-7 3.5-7 9c0 2.75 1.5 4.25 3.5 3.75s3.5-1.5 3.5-3.75Z");
}

.zq7aso-0q {
  d: path("M10.5 7c-3-.5-7 3.5-7 9c0 2.75 1.5 4.25 3.5 3.75s3.5-1.5 3.5-3.75Zm3 0c3-.5 7 3.5 7 9c0 2.75-1.5 4.25-3.5 3.75s-3.5-1.5-3.5-3.75ZM12 2.5v5M10.5 9L12 7.5L13.5 9");
}
</style><g class="hntgybcog"><path class="zq7aso-0q"/><path class="s8lgvbkjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lung-single"} {...others} />);
}

export default Component;
