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

.k32cqsb-b {
  d: path("M19 13L12 7L10.25 8.5M5 13L7.33333 11");
}

.msvkvmbbw {
  d: path("M5 17L12 11L13.75 12.5M19 17L16.6667 15");
}
</style><g class="hntgybcog"><path class="k32cqsb-b"/><path class="msvkvmbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-up-broken"} {...others} />);
}

export default Component;
