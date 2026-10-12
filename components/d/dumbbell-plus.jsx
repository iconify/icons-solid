import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hjbepcb0w {
  d: path("M2.75 12h2m14.5 0h2m-12.5 0h6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.po_89gbqo {
  width: 4px;
  height: 13.5px;
  x: 15.25px;
  y: 5.25px;
  rx: 1.5px;
}

.qmoqc5bhg {
  width: 4px;
  height: 13.5px;
  x: 4.75px;
  y: 5.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="qmoqc5bhg"/><rect class="po_89gbqo"/><path class="hjbepcb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dumbbell-plus"} {...others} />);
}

export default Component;
