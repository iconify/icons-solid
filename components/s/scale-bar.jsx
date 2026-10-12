import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hcpzo1bdd {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 9.75px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iudiszbon {
  d: path("M8.92 9.75h6.17v4.5H8.92zM3.5 17.5V20m8.5-2.5V20m8.5-2.5V20");
}
</style><g class="hntgybcog"><rect class="hcpzo1bdd"/><path class="iudiszbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:scale-bar"} {...others} />);
}

export default Component;
