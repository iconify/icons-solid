import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u6q5wlbgs {
  d: path("M4.5 5h13l-3 7.5h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zx-47rp2r {
  d: path("M7.25 16.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM4.5 5l-2-2.5M18 14h.01m2.49-3.5h.01M20 18h.01");
}
</style><g class="ulnmmdpxh"><path class="u6q5wlbgs"/><path class="zx-47rp2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lawn-spreader"} {...others} />);
}

export default Component;
