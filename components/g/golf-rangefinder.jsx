import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gif1hdbdk {
  d: path("M13 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pkag1cbnc {
  d: path("M2.5 9.5h4l3-3h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-10l-3-3h-4Z");
}
</style><g class="hntgybcog"><path class="pkag1cbnc"/><path class="gif1hdbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:golf-rangefinder"} {...others} />);
}

export default Component;
