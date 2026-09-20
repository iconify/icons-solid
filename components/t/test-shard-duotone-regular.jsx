import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b7kolodzb {
  fill: currentColor;
  d: path("m3 8 4 4 -4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g_po6wbmj {
  fill: currentColor;
  d: path("m10 8 4 4 -4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.j_72l_3ug {
  d: path("m17 8 4 4 -4 4Z");
}

.j-70hcbzd {
  d: path("m10 8 4 4 -4 4Z");
}

.kt4jgwb2r {
  d: path("m3 8 4 4 -4 4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tfixfresq {
  fill: currentColor;
  d: path("m17 8 4 4 -4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="b7kolodzb"/><path class="g_po6wbmj"/><path class="tfixfresq"/><path class="kt4jgwb2r"/><path class="j-70hcbzd"/><path class="j_72l_3ug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:test-shard-duotone-regular"} {...others} />);
}

export default Component;
