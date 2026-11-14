import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bypaybsio {
  d: path("M2.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qvq2qxbrh {
  d: path("M6.75 13a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M11 13l8-8m0-2.5V5h2.5");
}
</style><g class="hntgybcog"><path class="bypaybsio"/><path class="qvq2qxbrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:forecast-accuracy"} {...others} />);
}

export default Component;
