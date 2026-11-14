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

.s62fxjb8d {
  d: path("M5 2.5h10A1.5 1.5 0 0 1 16.5 4v13a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 17V4A1.5 1.5 0 0 1 5 2.5");
}

.yfhrjbbyi {
  d: path("m18.25 3.625l1.061.682A1.5 1.5 0 0 1 20 5.569V18.67a1.136 1.136 0 0 1-1.75.955l-1.061-.682a1.5 1.5 0 0 1-.689-1.262V4.58a1.136 1.136 0 0 1 1.75-.955M6.5 14.5l3-4L12 13l1.5-1.5");
}
</style><g class="hntgybcog"><path class="s62fxjb8d"/><path class="yfhrjbbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:canvas-print"} {...others} />);
}

export default Component;
