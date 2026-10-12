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

.neks5ib7s {
  cx: 18.25px;
  cy: 19px;
  r: 1.75px;
}

.ognf-3b5r {
  d: path("M10.25 16.02a6.75 6.75 0 1 1 3.5 0v3.73a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5Z");
}
</style><g class="hntgybcog"><path class="ognf-3b5r"/><circle class="neks5ib7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ping-pong"} {...others} />);
}

export default Component;
