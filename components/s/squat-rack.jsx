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

.p-1h55b8k {
  d: path("M2.75 9.25h18.5M4.5 7v4.5m15-4.5v4.5m-7.25-.75L7.5 14.5h7l-1.75 6.75h4");
}

.z13ah3brv {
  cx: 13px;
  cy: 4.5px;
  r: 1.75px;
}
</style><g class="hntgybcog"><circle class="z13ah3brv"/><path class="p-1h55b8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:squat-rack"} {...others} />);
}

export default Component;
