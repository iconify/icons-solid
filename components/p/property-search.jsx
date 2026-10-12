import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h3fbjsbhd {
  d: path("m15.4 15.4l5.85 5.85M7 12.65v-2.3q0-.6.46-.98l2.08-1.74q.46-.38.92 0l2.08 1.74q.46.38.46.98v2.3q0 .6-.6.6H7.6q-.6 0-.6-.6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ssznpn3eo {
  cx: 10px;
  cy: 10px;
  r: 7.25px;
}
</style><g class="hntgybcog"><circle class="ssznpn3eo"/><path class="h3fbjsbhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:property-search"} {...others} />);
}

export default Component;
