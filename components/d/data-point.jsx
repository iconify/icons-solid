import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c63o0tbyy {
  fill: currentColor;
  d: path("M12.75 8.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}

.y-9htdbnx {
  d: path("M15 12.5V14m0 2.5V18m-4-9.5H9.5M7 8.5H5.5");
}
</style><g class="hntgybcog"><path class="p8u760b4u"/><path class="c63o0tbyy"/><path class="y-9htdbnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:data-point"} {...others} />);
}

export default Component;
