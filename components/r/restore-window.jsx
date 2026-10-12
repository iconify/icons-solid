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

.ozabfsbxh {
  width: 13px;
  height: 12px;
  x: 2.75px;
  y: 8.25px;
  rx: 2.5px;
}

.xkfu__b1g {
  d: path("M3.5 11.75H15m-7.5-3.5v-2a2.5 2.5 0 0 1 2.5-2.5h8.75a2.5 2.5 0 0 1 2.5 2.5v7.5a2.5 2.5 0 0 1-2.5 2.5h-3");
}
</style><g class="hntgybcog"><rect class="ozabfsbxh"/><path class="xkfu__b1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:restore-window"} {...others} />);
}

export default Component;
