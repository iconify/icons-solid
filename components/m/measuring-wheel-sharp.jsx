import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzvmmb14m {
  cx: 8.75px;
  cy: 15.25px;
  r: 6px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lwhx5sb4u {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 15.25h.01");
}

.u8swf-b_j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.69 10.73L18.5 4.1m-1.51-1.31l3.02 2.62");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="fzvmmb14m"/><path class="lwhx5sb4u"/><path class="u8swf-b_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:measuring-wheel-sharp"} {...others} />);
}

export default Component;
