import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cb1l2mm0i {
  width: 4px;
  height: 4.5px;
  x: 13.5px;
  y: 4.75px;
  rx: 1.25px;
}

.dghy4xbte {
  d: path("M2.75 12.75h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kovi8mbiq {
  width: 18.5px;
  height: 12px;
  x: 2.75px;
  y: 9.25px;
  rx: 3.5px;
}

.qx003y-do {
  d: path("M9 9.25L7.25 3.5");
}
</style><g class="hntgybcog"><path class="qx003y-do"/><rect class="cb1l2mm0i"/><rect class="kovi8mbiq"/><path class="dghy4xbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:toiletry-bag"} {...others} />);
}

export default Component;
