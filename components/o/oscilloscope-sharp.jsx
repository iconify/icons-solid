import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkc9cjaff {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25h18.5v15.5H2.75z");
}

.et_xepb2q {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.25 9.25h.01m-.01 5.5h.01");
}

.q2h4d76ol {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12q1.05-3.75 2.1 0c1.05 3.75 1.4 2.5 2.1 0s1.4-2.5 2.1 0");
}

.sy70sxctc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 7.25H15v9.5H5.25v-9.5z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="bkc9cjaff"/><path class="sy70sxctc"/><path class="q2h4d76ol"/><path class="et_xepb2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:oscilloscope-sharp"} {...others} />);
}

export default Component;
