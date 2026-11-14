import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tnur1wmkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h15v11h-15ZM10 9v11m9.5-16.5Q19.5 6 22 6q-2.5 0-2.5 2.5Q19.5 6 17 6q2.5 0 2.5-2.5Z");
}
</style><path class="tnur1wmkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dishwasher-tablet"} {...others} />);
}

export default Component;
