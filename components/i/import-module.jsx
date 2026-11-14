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

.x2x0n0szn {
  d: path("m13 11l3 3l-3 3");
}

.xpeclebws {
  d: path("M8 11V5.5a2 2 0 0 1 2-2h9.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V17m0-9h13.5m-19 6H16");
}
</style><g class="hntgybcog"><path class="xpeclebws"/><path class="x2x0n0szn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:import-module"} {...others} />);
}

export default Component;
