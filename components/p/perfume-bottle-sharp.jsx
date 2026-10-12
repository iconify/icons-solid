import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3c_6ab3f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.75h6v3.5H9zm1.5 3.5h3v4.25h-3zM5.75 10.5h12.5v10.75H5.75z");
}

.rti6afb8w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.5 4.5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="d3c_6ab3f"/><path class="rti6afb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:perfume-bottle-sharp"} {...others} />);
}

export default Component;
