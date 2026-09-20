import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.lql2z9jat {
  fill: currentColor;
  d: path("M10 10h4v7l-2 -2 -2 2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ss9ca_5lc {
  d: path("M10 10h4v7l-2 -2 -2 2Z");
}
</style><g class="s0phu2bbs"><path class="r0jamibkm"/><path class="lql2z9jat"/><path class="bn_pu6j-z"/><path class="ss9ca_5lc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:bookmark-folder-duotone-bold"} {...others} />);
}

export default Component;
