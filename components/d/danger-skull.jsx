import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g4tju8tjf {
  d: path("M6.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-5.25 5.25h7.5m-5 0v3m2.5-3v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.og70b5ofm {
  d: path("M3 12a9 8 0 0 1 18 0v2.75l-3 2v3.5H6v-3.5l-3-2Z");
}
</style><g class="hntgybcog"><path class="og70b5ofm"/><path class="g4tju8tjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:danger-skull"} {...others} />);
}

export default Component;
