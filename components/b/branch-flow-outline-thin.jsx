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

.q9br621tu {
  d: path("m9 12 5 5h8");
}

.uol1biies {
  d: path("M2 12h7l5 -5h8");
}
</style><g class="hntgybcog"><path class="uol1biies"/><path class="q9br621tu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:branch-flow-outline-thin"} {...others} />);
}

export default Component;
