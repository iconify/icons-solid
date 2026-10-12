import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b7k5lzb_i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.25 3.75h.01");
}

.g85y4diga {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 6a5.06 5.06 0 0 0 7 7a7 7 0 1 1-7-7Zm8.65-.93l.49 1.02l.15.32l.35.04l1.13.15l.35.05l-.26.24l-.82.79l-.26.24l.07.34l.2 1.12l.07.34l-.31-.16l-1-.54l-.31-.17l-.31.17l-1 .54l-.31.16l.07-.34l.2-1.12l.07-.34l-.26-.24l-.82-.79l-.26-.24l.35-.05l1.13-.15l.35-.04l.15-.32l.49-1.02l.15-.32z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="g85y4diga"/><path class="b7k5lzb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:moon-stars-sharp"} {...others} />);
}

export default Component;
