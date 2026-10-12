import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8c6ty0qq {
  width: 6.5px;
  height: 10px;
  x: 7.25px;
  y: 5.25px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uj0xbmb9r {
  d: path("M7.25 8.75h6.5m-6.5 3.5h6.5M16.5 6v2.5m-9.25 9.75h6.5");
}

.x00qgzx7x {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><rect class="f8c6ty0qq"/><path class="uj0xbmb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:vending-machine"} {...others} />);
}

export default Component;
