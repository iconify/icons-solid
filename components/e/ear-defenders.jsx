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

.jkhpzcb_d {
  width: 5.5px;
  height: 10.75px;
  x: 15.75px;
  y: 10.5px;
  rx: 2.75px;
}

.ohcjvuwxz {
  d: path("M4.25 10.8a7.75 7.75 0 0 1 15.5 0");
}

.rslk0pb2y {
  width: 5.5px;
  height: 10.75px;
  x: 2.75px;
  y: 10.5px;
  rx: 2.75px;
}

.xt51qgbyr {
  d: path("M7.25 10.8a4.75 4.75 0 0 1 9.5 0");
}
</style><g class="hntgybcog"><rect class="rslk0pb2y"/><rect class="jkhpzcb_d"/><path class="ohcjvuwxz"/><path class="xt51qgbyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ear-defenders"} {...others} />);
}

export default Component;
