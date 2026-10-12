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

.m10ymsugb {
  cx: 12px;
  cy: 12px;
  r: 3.5px;
}

.mc92kqbrb {
  cx: 17.83px;
  cy: 6.17px;
  r: 2px;
}

.s_yqvibim {
  d: path("M19.07 7.74a8.25 8.25 0 1 1-2.81-2.81");
}
</style><g class="hntgybcog"><circle class="m10ymsugb"/><path class="s_yqvibim"/><circle class="mc92kqbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:orbit"} {...others} />);
}

export default Component;
