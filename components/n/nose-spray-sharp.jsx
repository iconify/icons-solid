import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h-o-vybtb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 4.75h.01m2.74-1.5h.01M18 6.5h.01m2.74-1.75h.01");
}

.hr-8rr0fn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.25h-2v-9H7V9.5h1.25l2.58-6a.75.75 0 0 1 1.45.39l-.53 5.61H13v2.75h2.5v9h-2Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="hr-8rr0fn"/><path class="h-o-vybtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:nose-spray-sharp"} {...others} />);
}

export default Component;
