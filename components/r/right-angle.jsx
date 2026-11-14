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

.hp8lutrqw {
  d: path("M5 4v16h15");
}

.lntgyoj_g {
  d: path("M5 14.5h5.5V20");
}
</style><g class="hntgybcog"><path class="hp8lutrqw"/><path class="lntgyoj_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:right-angle"} {...others} />);
}

export default Component;
