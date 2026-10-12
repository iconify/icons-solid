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

.kjm_8kbdd {
  d: path("M5.5 5.25L12.25 12L5.5 18.75");
}

.x7mmjacnf {
  d: path("M11.75 5.25L18.5 12l-6.75 6.75");
}
</style><g class="hntgybcog"><path class="kjm_8kbdd"/><path class="x7mmjacnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chevrons-last"} {...others} />);
}

export default Component;
