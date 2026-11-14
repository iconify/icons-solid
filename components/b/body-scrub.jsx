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

.ibzv54bni {
  d: path("M3 12h18l-1.5 6.75a2.25 2.25 0 0 1-2.25 1.75H6.75a2.25 2.25 0 0 1-2.25-1.75Z");
}

.qp90c6bzh {
  d: path("M7 7a5 5 0 1 0 10 0A5 5 0 1 0 7 7m5-1.5h.01M10.5 8.25h.01m2.99 0h.01");
}
</style><g class="hntgybcog"><path class="ibzv54bni"/><path class="qp90c6bzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:body-scrub"} {...others} />);
}

export default Component;
