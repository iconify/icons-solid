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

.nu1padbky {
  width: 7.5px;
  height: 8.75px;
  x: 13.75px;
  y: 12.5px;
  rx: 1.5px;
}

.sjj648tkc {
  width: 7.5px;
  height: 8.75px;
  x: 2.75px;
  y: 12.5px;
  rx: 1.5px;
}

.tbmdxy7wx {
  d: path("M6.5 12.5v3m11-3v3M12 3v6M9 6h6");
}
</style><g class="hntgybcog"><rect class="sjj648tkc"/><rect class="nu1padbky"/><path class="tbmdxy7wx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bundle-offer"} {...others} />);
}

export default Component;
