import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpfhkhbtr {
  d: path("M3 13c.5-6 6-9 10.5-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i5mszekxz {
  d: path("m3 13l10.5-7v7.5A5.5 5.5 0 0 1 8 19a5.5 5.5 0 0 1-5-6m10.5-4.5H20a1.75 1.75 0 0 1 0 3.5h-6.5");
}
</style><g class="hntgybcog"><path class="i5mszekxz"/><path class="bpfhkhbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:garden-scoop"} {...others} />);
}

export default Component;
