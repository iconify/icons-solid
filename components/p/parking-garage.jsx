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

.u24f3eowe {
  d: path("M16.25 9V5.5h1.5a1.25 1.25 0 0 1 0 2.5h-1.5");
}

.vojrdhb8t {
  d: path("M2.75 14.75h18.5m-18.5 3.5h18.5");
}

.x2ihsrjln {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 11.25px;
  rx: 0.75px;
}

.xhcp3ibnu {
  width: 7.5px;
  height: 8px;
  x: 13.75px;
  y: 3.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="x2ihsrjln"/><path class="vojrdhb8t"/><rect class="xhcp3ibnu"/><path class="u24f3eowe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:parking-garage"} {...others} />);
}

export default Component;
