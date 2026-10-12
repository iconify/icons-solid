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

.uppnnippz {
  d: path("M2.75 8.25h18.5m-13-5.5l2.5 5.5M14 2.75l2.5 5.5m-6.25 3.35v5.3a.75.75 0 0 0 1.15.65l4.1-2.65a.75.75 0 0 0 0-1.3l-4.1-2.65a.75.75 0 0 0-1.15.65");
}

.zquxadblv {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 4.5px;
}
</style><g class="hntgybcog"><rect class="zquxadblv"/><path class="uppnnippz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:reel-play"} {...others} />);
}

export default Component;
