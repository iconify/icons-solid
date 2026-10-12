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

.ijhqdybvf {
  d: path("m7 11.75l3-3l2.5 2l4.5-4.5m-5 9.5v3m-3.5 2.5l3.5-2.5l3.5 2.5");
}

.jf3edpbej {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 3.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="jf3edpbej"/><path class="ijhqdybvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:presentation"} {...others} />);
}

export default Component;
