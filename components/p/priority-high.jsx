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

.ihvl-zl6o {
  d: path("M5.5 10L12 3.5l6.5 6.5");
}

.yrfw9q2nk {
  d: path("M5.5 15.5L12 9l6.5 6.5m-11 5h9");
}
</style><g class="hntgybcog"><path class="ihvl-zl6o"/><path class="yrfw9q2nk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:priority-high"} {...others} />);
}

export default Component;
