import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eka5_4bzo {
  d: path("M5.5 2.5C12 6 18 12 19.5 18.5h-14Zm0 16v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m866e2bak {
  d: path("m8.5 12.25l2-1.75v5.25");
}
</style><g class="hntgybcog"><path class="eka5_4bzo"/><path class="m866e2bak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sail-number"} {...others} />);
}

export default Component;
