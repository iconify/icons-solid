import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhoe--bbr {
  d: path("m5 4l6.5 3.5v3L5 14m6.5-5H14c3.5 0 6 2.5 6 6s-2.5 6-6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n2-0ppb8m {
  d: path("M3.25 9a1.75 5 0 1 0 3.5 0a1.75 5 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="n2-0ppb8m"/><path class="dhoe--bbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pet-anaesthesia"} {...others} />);
}

export default Component;
