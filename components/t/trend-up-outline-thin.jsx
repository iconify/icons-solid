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

.kk-764bgz {
  d: path("M17 7h4v4");
}

.q0ddccbcl {
  d: path("m3 17 6 -6 4 4 8 -8");
}
</style><g class="hntgybcog"><path class="q0ddccbcl"/><path class="kk-764bgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:trend-up-outline-thin"} {...others} />);
}

export default Component;
