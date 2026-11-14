import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.acyy74bpz {
  d: path("M14.75 3v17.5M8.5 11.75H21M6.5 6.5h2M6.5 17h2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lp-o5ebpg {
  d: path("M10.25 3h9A1.75 1.75 0 0 1 21 4.75v14a1.75 1.75 0 0 1-1.75 1.75h-9a1.75 1.75 0 0 1-1.75-1.75v-14A1.75 1.75 0 0 1 10.25 3");
}

.ocstb-qmw {
  fill: currentColor;
  d: path("M4 3h1a1.5 1.5 0 0 1 1.5 1.5V19A1.5 1.5 0 0 1 5 20.5H4A1.5 1.5 0 0 1 2.5 19V4.5A1.5 1.5 0 0 1 4 3");
}
</style><g class="hntgybcog"><path class="lp-o5ebpg"/><path class="ocstb-qmw"/><path class="acyy74bpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:window-shutters"} {...others} />);
}

export default Component;
