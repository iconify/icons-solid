import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cduxoybfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 3.5l5.5 7v4L8.75 21M19.5 3.5l-5.5 7v4l1.25 6.5M10 10.5h4m-4-5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="cduxoybfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:stretch-break"} {...others} />);
}

export default Component;
