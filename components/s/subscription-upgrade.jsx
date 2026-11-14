import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ctq0t5yes {
  d: path("M5.938 8.5A7 7 0 0 1 19 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kxpifnd7k {
  d: path("M7.5 14.5L5 12l-2.5 2.5m9.5.75v-6.5M9.75 11L12 8.75L14.25 11");
}

.vhrqxgm1n {
  d: path("M16.5 9.5L19 12l2.5-2.5m-3.438 6A7 7 0 0 1 5 12");
}
</style><g class="hntgybcog"><path class="ctq0t5yes"/><path class="vhrqxgm1n"/><path class="kxpifnd7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:subscription-upgrade"} {...others} />);
}

export default Component;
