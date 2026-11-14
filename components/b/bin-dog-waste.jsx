import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ldlcdbb4l {
  d: path("M4.5 11.5h15M6 11.5l1.25 10h9.5l1.25-10m-8.25 0V9.25c-2-.25-3-2-2.5-3.75S9.75 3 12.5 3c1.25 0 2.25.5 2.75 1.5L19 6.75l-3.75 2c-.75.75-.75 1.75-.5 2.75");
}

.tgi4fy4au {
  d: path("M10.5 3.25c-.75 1.75-.75 4.25-.75 6m3-3.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ldlcdbb4l"/><path class="tgi4fy4au"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bin-dog-waste"} {...others} />);
}

export default Component;
