import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e3t7nhbad {
  d: path("M19.5 21.5V10.25a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v.25a2 2 0 0 0 2 2h9.25v9M3 21.5h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ogg9yf5cn {
  d: path("M6 15.25v3.25a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-3.25M8.5 2.5h2A1.5 1.5 0 0 1 12 4a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 7 4a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="e3t7nhbad"/><path class="ogg9yf5cn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:capsule-coffee-machine"} {...others} />);
}

export default Component;
