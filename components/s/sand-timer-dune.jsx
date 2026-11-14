import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d9j126n1j {
  d: path("M4.5 2.5h15m-15 19h15m-13-19v2l4 6v3l-4 6v2m11-19v2l-4 6v3l4 6v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xcyve2bam {
  d: path("M7.5 18q2.25-3 4.5-.5q2.25-2.5 4.5.5");
}
</style><g class="hntgybcog"><path class="d9j126n1j"/><path class="xcyve2bam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sand-timer-dune"} {...others} />);
}

export default Component;
