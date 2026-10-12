import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h-ki5u0mp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 2.75v5.5h5.5M8 17.75l3-3.5l2 2L14.25 15L16 17.75");
}

.s43l187bp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xea3jux9p {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 11.25h.01");
}
</style><g class="ux2u0rbkq"><path class="s43l187bp"/><path class="h-ki5u0mp"/><path class="xea3jux9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:jpeg-file-sharp"} {...others} />);
}

export default Component;
