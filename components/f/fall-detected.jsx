import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.inm8ezrig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 7.25L10 13m0 0l-4 2.5L3.5 19m6.5-6l2.5 4l-1.5 3.5M13.75 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.5 3.75l4.75 1.5m-5.5-.5L8 7M2.5 21.5h19m-2.25-8l1.75-.75m-2.5 3.5l2 .25");
}
</style><path class="inm8ezrig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fall-detected"} {...others} />);
}

export default Component;
