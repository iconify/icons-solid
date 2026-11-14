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

.n_ejm_bhj {
  d: path("M3 11.5a9 9 0 1 0 18 0a9 9 0 1 0-18 0m-.5 9h19");
}

.n3sfkyb3t {
  d: path("M3.5 8.5q8.5 6.5 17 0");
}
</style><g class="hntgybcog"><path class="n_ejm_bhj"/><path class="n3sfkyb3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pilates-ball"} {...others} />);
}

export default Component;
