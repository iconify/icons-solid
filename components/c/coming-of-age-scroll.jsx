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

.iefjp6brw {
  d: path("M7.5 7h-2a2 2 0 0 1 0-4h9a2 2 0 0 1 2 2v12h2a2 2 0 0 1 0 4h-9a2 2 0 0 1-2-2Zm0 5h9");
}

.mq8a7k77g {
  d: path("M10.25 16L12 12l1.75 4");
}
</style><g class="hntgybcog"><path class="iefjp6brw"/><path class="mq8a7k77g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:coming-of-age-scroll"} {...others} />);
}

export default Component;
