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

.n3c1q1b5d {
  d: path("M12 12.75v1.75");
}

.xjkqd2bbf {
  d: path("M5.25 20.25V9.5a6.75 6.75 0 0 1 13.5 0v10.75a1 1 0 0 1-1 1H6.25a1 1 0 0 1-1-1m3.5-11.5h6.5");
}

.xldnaxbku {
  width: 6px;
  height: 5px;
  x: 9px;
  y: 12.75px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><path class="xjkqd2bbf"/><rect class="xldnaxbku"/><path class="n3c1q1b5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mailbox-parcel"} {...others} />);
}

export default Component;
