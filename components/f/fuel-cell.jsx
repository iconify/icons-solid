import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxghl6bpe {
  d: path("M8 7V4.25M16 7V4.25m-9.25 0h2.5m5.5 0h2.5M8.5 10.5v7m3.5-7v7m3.5-7v7");
}

.ey1wtwbcx {
  width: 16px;
  height: 14.25px;
  x: 4px;
  y: 7px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="ey1wtwbcx"/><path class="cxghl6bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fuel-cell"} {...others} />);
}

export default Component;
