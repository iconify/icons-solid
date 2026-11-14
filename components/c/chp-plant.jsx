import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccg__xzzk {
  d: path("m10 13.75l-2 2.5h3l-2 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xadt2jdfq {
  d: path("M2.5 21V11L8 7.5V11l5.5-3.5V11h2V2.5h5V21Z");
}
</style><g class="hntgybcog"><path class="xadt2jdfq"/><path class="ccg__xzzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chp-plant"} {...others} />);
}

export default Component;
