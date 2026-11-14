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

.ly8redbqe {
  d: path("m5.5 11.5l3.5-5h7");
}

.rlq3c1bkd {
  d: path("M2.5 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m13 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.yoedwpbie {
  d: path("m18.5 11.5l-4-8H12M2.5 18.75a9.5 2 0 1 0 19 0a9.5 2 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="rlq3c1bkd"/><path class="ly8redbqe"/><path class="yoedwpbie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:speedway-bike"} {...others} />);
}

export default Component;
