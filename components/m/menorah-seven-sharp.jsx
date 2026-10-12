import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rd61v3b8d {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.25 4.75h.01m2.99 0h.01m2.99 0h.01m2.74 0h.01m2.74 0h.01m2.99 0h.01m2.99 0h.01");
}

.u4jl2uzif {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8v10.75M9.25 8a2.75 2 0 0 0 5.5 0m-8.5 0a5.75 5 0 0 0 11.5 0M3.25 8a8.75 8 0 0 0 17.5 0M9 21.25c0-1.5 1.25-2.5 3-2.5s3 1 3 2.5Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="u4jl2uzif"/><path class="rd61v3b8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:menorah-seven-sharp"} {...others} />);
}

export default Component;
