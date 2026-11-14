import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dcox06bxm {
  fill: currentColor;
  d: path("M5 3.5h7.25v5H5Zm7.25 5h7.25v5h-7.25Z");
}

.hnkey_0ia {
  d: path("M5 2.5v19m1.5-18H18A1.5 1.5 0 0 1 19.5 5v7a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 12V5a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hnkey_0ia"/><path class="dcox06bxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:finish-line-flag"} {...others} />);
}

export default Component;
