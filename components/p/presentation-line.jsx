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

.lnuj2qkqk {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v6.5A3.5 3.5 0 0 1 18 16H6a3.5 3.5 0 0 1-3.5-3.5V6A3.5 3.5 0 0 1 6 2.5m2 19l2-5.5m6 5.5L14 16");
}

.rhi2ieb2n {
  d: path("M6.5 12.5L10 9l3 2l4.5-5");
}
</style><g class="hntgybcog"><path class="lnuj2qkqk"/><path class="rhi2ieb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:presentation-line"} {...others} />);
}

export default Component;
