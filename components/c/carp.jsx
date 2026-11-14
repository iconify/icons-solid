import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hbxo-khhv {
  d: path("M4.5 13c2.5-6 9.5-6 12 0L21 9v8l-4.5-4c-2.5 6-9.5 6-12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kh4k_3_sh {
  d: path("M7.5 9.5C9 5.5 12 5 15 10.25M4.5 13l-2 3m3.25-.75l-.5 3.25m2.5-6h.01");
}
</style><g class="hntgybcog"><path class="hbxo-khhv"/><path class="kh4k_3_sh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:carp"} {...others} />);
}

export default Component;
