import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.an639snmo {
  d: path("M2 12a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0");
}

.d4zkzgjmg {
  d: path("M10.5 3.5h3a8.5 8.5 0 0 1 0 17h-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.omrbg2bmh {
  d: path("M6.5 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 0h.01");
}
</style><g class="hntgybcog"><path class="an639snmo"/><path class="d4zkzgjmg"/><path class="omrbg2bmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:slick-tyre"} {...others} />);
}

export default Component;
