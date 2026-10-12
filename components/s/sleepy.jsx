import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6a05acrm {
  cx: 13.5px;
  cy: 14px;
  r: 1.5px;
}

.k-uix-ndb {
  d: path("M7.75 10c.75.75 2 .75 2.75 0m3 0c.75.75 2 .75 2.75 0m-6.5 8l3-.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="k-uix-ndb"/><circle class="i6a05acrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sleepy"} {...others} />);
}

export default Component;
