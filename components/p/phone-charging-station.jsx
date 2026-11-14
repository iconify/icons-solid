import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h54_x7bqb {
  d: path("M10.5 5.5L7.75 10h3.5L8.5 14.5");
}

.i0pl85-nf {
  d: path("M4.5 2.5h10v15h-10Zm5 15V19a2.5 2.5 0 0 0 2.5 2.5h7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i0pl85-nf"/><path class="h54_x7bqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:phone-charging-station"} {...others} />);
}

export default Component;
