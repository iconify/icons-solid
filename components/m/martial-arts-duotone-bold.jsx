import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.brz3--krt {
  d: path("m15 14 4 4");
}

.dsh6t34ve {
  fill: currentColor;
  d: path("M9 8v6h6V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.f8208jb9b {
  d: path("M9 8v6h6V8Z");
}

.k187sabpz {
  d: path("M2 11h20");
}

.mhk3euagx {
  d: path("m9 14 -4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="dsh6t34ve"/><path class="k187sabpz"/><path class="f8208jb9b"/><path class="mhk3euagx"/><path class="brz3--krt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:martial-arts-duotone-bold"} {...others} />);
}

export default Component;
