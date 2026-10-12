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

.p0s2vccap {
  width: 7.5px;
  height: 5px;
  x: 13.5px;
  y: 13px;
  rx: 1.25px;
}

.qq-shkyyc {
  width: 7.5px;
  height: 5px;
  x: 13.5px;
  y: 4px;
  rx: 1.25px;
}

.tiegy7b2y {
  d: path("M3 21h4.5m6 0H18");
}

.tjc_rcb2i {
  width: 7.5px;
  height: 5px;
  x: 3px;
  y: 13px;
  rx: 1.25px;
}

.wuf014ltl {
  width: 7.5px;
  height: 5px;
  x: 3px;
  y: 4px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="wuf014ltl"/><rect class="qq-shkyyc"/><rect class="tjc_rcb2i"/><rect class="p0s2vccap"/><path class="tiegy7b2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:storyboard"} {...others} />);
}

export default Component;
