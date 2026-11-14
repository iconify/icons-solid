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

.q-n27pbxb {
  d: path("M11.5 9.5h1A1.5 1.5 0 0 1 14 11v1.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V11a1.5 1.5 0 0 1 1.5-1.5m-4 2.25H10m4 0h2.5");
}

.u007blnnp {
  d: path("M7 18.5L8 5h8l1 13.5m-14.5 0h19");
}
</style><g class="hntgybcog"><path class="u007blnnp"/><path class="q-n27pbxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pilgrim-hat"} {...others} />);
}

export default Component;
