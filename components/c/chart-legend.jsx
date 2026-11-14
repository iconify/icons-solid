import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.isrgbactk {
  d: path("M2.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.myp7s5anr {
  d: path("M8.5 6v6l5 3.25m4-7.25h3m-3 4h3m-3 4h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="isrgbactk"/><path class="myp7s5anr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-legend"} {...others} />);
}

export default Component;
