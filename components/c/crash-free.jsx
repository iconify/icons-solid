import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccb46tbsv {
  d: path("m12 2.5l7.5 2.75V11c0 4.5-3 8-7.5 10.5c-4.5-2.5-7.5-6-7.5-10.5V5.25Z");
}

.dkvdnlczs {
  d: path("m8.5 11.75l2.5 2.5l4.75-5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ccb46tbsv"/><path class="dkvdnlczs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:crash-free"} {...others} />);
}

export default Component;
