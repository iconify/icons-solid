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

.p7fqmbcmq {
  width: 12.5px;
  height: 6px;
  x: 5.75px;
  y: 9px;
  rx: 1.5px;
}

.zhclxacbk {
  d: path("M2.75 3.75h18.5m-18.5 16.5h18.5");
}
</style><g class="hntgybcog"><path class="zhclxacbk"/><rect class="p7fqmbcmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:distribute-vertical"} {...others} />);
}

export default Component;
