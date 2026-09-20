import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bdvf6t_rz {
  d: path("M7.5 13a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.hgon-pbwq {
  d: path("M5 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mhqlqeb7x {
  d: path("M18 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.oq9ztqbxu {
  d: path("M11 4a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.q7dxcnbil {
  d: path("M17 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.qyt_1qaov {
  d: path("M4 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="bdvf6t_rz"/><path class="qyt_1qaov"/><path class="oq9ztqbxu"/><path class="mhqlqeb7x"/><path class="hgon-pbwq"/><path class="q7dxcnbil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:pollen-high-outline-thin"} {...others} />);
}

export default Component;
