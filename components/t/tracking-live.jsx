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

.nke9ovbpb {
  d: path("M5.5 5.5a9 9 0 0 0 0 13m13-13a9 9 0 0 1 0 13");
}

.spzchkb1f {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0M7.5 7.5a6.5 6.5 0 0 0 0 9m9-9a6.5 6.5 0 0 1 0 9");
}
</style><g class="hntgybcog"><path class="spzchkb1f"/><path class="nke9ovbpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tracking-live"} {...others} />);
}

export default Component;
