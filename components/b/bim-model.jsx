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

.ll__ktbrj {
  d: path("M4.5 9h9a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 19.5v-9A1.5 1.5 0 0 1 4.5 9");
}

.ue90-3xlj {
  d: path("m3 9l6-6h12v12l-6 6m6-18l-6 6M9 5v2.5m0 3V13m2 2h2.5m3 0H19M7.75 16.25l-2 2");
}
</style><g class="hntgybcog"><path class="ll__ktbrj"/><path class="ue90-3xlj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bim-model"} {...others} />);
}

export default Component;
