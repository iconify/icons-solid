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

.lb1jk9b-j {
  cx: 9px;
  cy: 7.5px;
  r: 3.5px;
}

.tpdafgbop {
  d: path("m7.25 9l1.25-.5m2.25.5L9.5 8.5M2.75 21.25v-1.5a6.25 6.25 0 0 1 12.5 0v1.5Zm16.5 0V11.5a2 2 0 0 0-4 0v.75");
}
</style><g class="hntgybcog"><circle class="lb1jk9b-j"/><path class="tpdafgbop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:grandfather"} {...others} />);
}

export default Component;
