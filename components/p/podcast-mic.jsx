import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-d23fhvr {
  d: path("M4.75 7.75h9m-9 2.75h9m-4.5 3V16m4.5-7.5h3.5v12.75m-4.5 0h8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wlmc0cksb {
  width: 9px;
  height: 10.75px;
  x: 4.75px;
  y: 2.75px;
  rx: 4.5px;
}
</style><g class="hntgybcog"><rect class="wlmc0cksb"/><path class="b-d23fhvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:podcast-mic"} {...others} />);
}

export default Component;
