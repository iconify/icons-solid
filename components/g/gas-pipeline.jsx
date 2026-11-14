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

.kirestbtc {
  d: path("M6.25 8a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.p-85jv38c {
  d: path("M2.75 14H16.5V5m4 0v9a4 4 0 0 1-4 4H2.75m0-5.5v7M15.25 5h6.5M9 14v-3.25");
}
</style><g class="hntgybcog"><path class="p-85jv38c"/><path class="kirestbtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gas-pipeline"} {...others} />);
}

export default Component;
