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

.husmis_cg {
  d: path("M2.5 20V5h14v15m0-15l5 4v11");
}

.xktfzwb6c {
  d: path("M2.5 12.5h14l5 2M9.5 5v15");
}
</style><g class="hntgybcog"><path class="husmis_cg"/><path class="xktfzwb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:soccer-goal"} {...others} />);
}

export default Component;
