import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c5xa57-du {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.75 8.5h.01");
}

.k-nxuebzu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 7.4C9.5 5.5 8 4 5.5 3.25c3 0 5.5 1 7.25 3Z");
}

.ouuw5vb4w {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 21.25l1-2.75l-1.75-1.25L6 16l-1.5-2L7 13l-.75-2.25l2.25-.5L10.045 6H14l5.5 1.25l1.75.5l-.25 1.5l-.25 1l-5.25.5l3.75 1.5l.75 1.25l-1.25.25l-4.25.25c-1.5 1.5-2 4-1.75 7.25Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="ouuw5vb4w"/><path class="k-nxuebzu"/><path class="c5xa57-du"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dragon-sharp"} {...others} />);
}

export default Component;
