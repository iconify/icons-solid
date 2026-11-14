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

.u7ej9pbsk {
  d: path("M16 6.5h4.5V11m-17 10h17");
}

.vxkx5oxii {
  d: path("M3.5 18L9 12l4 3.5l7.5-9");
}
</style><g class="hntgybcog"><path class="vxkx5oxii"/><path class="u7ej9pbsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:risk-trend"} {...others} />);
}

export default Component;
