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

.m4li5fhtu {
  fill: currentColor;
  d: path("m12 15 7 -7 2 2 -7 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nvna-acap {
  fill: currentColor;
  d: path("M3 3v13h12V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uistg-qvk {
  d: path("m13 16 -3 3h3");
}

.yv9cwobex {
  d: path("m12 15 7 -7 2 2 -7 7Z");
}

.yy6kkpb1q {
  d: path("M3 3v13h12V3Z");
}
</style><g class="hntgybcog"><path class="nvna-acap"/><path class="m4li5fhtu"/><path class="yy6kkpb1q"/><path class="yv9cwobex"/><path class="uistg-qvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:drawing-duotone-thin"} {...others} />);
}

export default Component;
