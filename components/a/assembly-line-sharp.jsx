import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.izangtb6s {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 18.75h.01m11.99 0h.01");
}

.o_vo1ib2r {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.75 2.75v3m-2 0h4m-14 3h5v4.5h-5zm9.5 0h5v4.5h-5zm-11.5 7.5h18.5v5H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="o_vo1ib2r"/><path class="izangtb6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:assembly-line-sharp"} {...others} />);
}

export default Component;
