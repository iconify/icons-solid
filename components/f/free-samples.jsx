import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gln3-pb7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4H15M3.5 4l1.75 15.5h7L14 4m4.75 9Q19 16.25 22 16.5q-3 .25-3.25 3.5q-.25-3.25-3.25-3.5q3-.25 3.25-3.5");
}
</style><path class="gln3-pb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:free-samples"} {...others} />);
}

export default Component;
