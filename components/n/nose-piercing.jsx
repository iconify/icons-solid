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

.k0w78nbns {
  d: path("M11.5 18c-2 0-2-3.5.5-3.5m1.75 5.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.wlrj-mbve {
  d: path("M7 2.5c1.5 5 6 8.5 10 12c1.5 1.5.5 3.5-1.5 3.5h-4");
}
</style><g class="hntgybcog"><path class="wlrj-mbve"/><path class="k0w78nbns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:nose-piercing"} {...others} />);
}

export default Component;
