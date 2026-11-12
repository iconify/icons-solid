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

.puolaabmm {
  d: path("M21 20L21 4");
}

.r2x8l0bfc {
  d: path("M16 12L3 12M7.375 16L3 12L7.375 8");
}
</style><g class="hntgybcog"><path class="puolaabmm"/><path class="r2x8l0bfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-from-line-linear"} {...others} />);
}

export default Component;
