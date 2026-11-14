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

.hpl9opmef {
  d: path("M13 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M2.5 21.5h7M18 6v9.5m-3.5 0h7");
}

.nohtw3bix {
  d: path("M5 21.5v-18h10.5");
}
</style><g class="hntgybcog"><path class="nohtw3bix"/><path class="hpl9opmef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cable-machine"} {...others} />);
}

export default Component;
