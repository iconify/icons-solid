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

.p5g2unhun {
  d: path("M2.5 12h3m13 0h3m-16 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m4.25-2h.01m4.49 0h.01");
}

.t3zcp6p6j {
  d: path("M14.815 13.625a3.25 3.25 0 0 1-5.63 0");
}
</style><g class="hntgybcog"><path class="p5g2unhun"/><path class="t3zcp6p6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:emoji-slider"} {...others} />);
}

export default Component;
