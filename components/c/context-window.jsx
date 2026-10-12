import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cv_tse5pf {
  d: path("M8.75 12h6.5");
}

.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vs__zbbkk {
  width: 12px;
  height: 4.5px;
  x: 6px;
  y: 9.75px;
  rx: 1.75px;
}

.yl2kt2bhp {
  d: path("M7.25 5.75h9.5m-9.5 12.5h6");
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><path class="yl2kt2bhp"/><rect class="vs__zbbkk"/><path class="cv_tse5pf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:context-window"} {...others} />);
}

export default Component;
