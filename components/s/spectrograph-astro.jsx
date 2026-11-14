import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.autxr5-my {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11 5l6.5 14h-13Zm-8.5 9l5.25-2m6.5 0l7.25-3.5M14.25 12l7.25.5m-7.25-.5l7.25 4.5");
}
</style><path class="autxr5-my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:spectrograph-astro"} {...others} />);
}

export default Component;
