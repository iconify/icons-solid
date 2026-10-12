import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f1814vb6s {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.5 11.5h.01");
}

.pkwgdd95d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.75h11v18.5h-11z");
}

.rvf254fph {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8.5C8.25 7.25 10 6.75 12 6.75s3.75.5 5.5 1.75m-3 3v6.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="pkwgdd95d"/><path class="rvf254fph"/><path class="f1814vb6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sleeping-bag-sharp"} {...others} />);
}

export default Component;
