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

.ijs0p36kx {
  d: path("M2.75 12h18.5");
}

.r8c2t65yh {
  width: 3.5px;
  height: 4.5px;
  x: 4.25px;
  y: 5.25px;
  rx: 1px;
}

.trw0bvood {
  width: 3.5px;
  height: 7px;
  x: 10.25px;
  y: 14.25px;
  rx: 1px;
}

.ud8_d0biv {
  width: 3.5px;
  height: 7px;
  x: 16.25px;
  y: 2.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="ijs0p36kx"/><rect class="r8c2t65yh"/><rect class="trw0bvood"/><rect class="ud8_d0biv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chart-area-negative"} {...others} />);
}

export default Component;
