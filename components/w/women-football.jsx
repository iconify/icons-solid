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

.p9_bt0bkd {
  d: path("M11.5 5.25c3-.25 4 2.75 2.75 5.25M2.5 21c0-4 2.5-6.5 6-6.5c.896 0 1.726.164 2.466.475M13 17.5a4.5 2.75 0 1 0 9 0a4.5 2.75 0 1 0-9 0m3.25 1.25l2.5-2.5");
}

.zij3bzzbn {
  d: path("M5 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="zij3bzzbn"/><path class="p9_bt0bkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:women-football"} {...others} />);
}

export default Component;
