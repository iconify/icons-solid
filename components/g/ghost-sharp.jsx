import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f69v2pg5j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 9.25h.01m4.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vv4uzxbxl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75a7 7 0 0 1 7 7v4.5c0 2 .75 3.5 2 4.5c-1.75 1-3.75.75-5-.25l-1.5 2.25H12c-4 0-7-3-7-7v-4a7 7 0 0 1 7-7Z");
}

.wrw3oqb-g {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 14a1.5 2 0 1 0 3 0a1.5 2 0 1 0-3 0Z");
}
</style><g class="ux2u0rbkq"><path class="vv4uzxbxl"/><path class="f69v2pg5j"/><path class="wrw3oqb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ghost-sharp"} {...others} />);
}

export default Component;
