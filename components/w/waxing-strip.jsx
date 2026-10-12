import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dsohl-s8p {
  width: 12px;
  height: 9px;
  x: 2.75px;
  y: 5.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j0qmvz90d {
  d: path("m5.75 8.5l.75 3.25M8.75 8.5l.75 3.25m2.25-3.25l.75 3.25");
}

.mn9zz_10d {
  width: 3.5px;
  height: 6px;
  x: 17.75px;
  y: 7.25px;
  rx: 1.25px;
}

.nlyh2zbmv {
  d: path("M2.75 19.25c3-1.25 6.15-1.25 9.25 0s6.25 1.25 9.25 0");
}
</style><g class="hntgybcog"><rect class="dsohl-s8p"/><path class="j0qmvz90d"/><rect class="mn9zz_10d"/><path class="nlyh2zbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:waxing-strip"} {...others} />);
}

export default Component;
