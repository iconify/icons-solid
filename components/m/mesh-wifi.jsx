import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sinbrccnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-7.25 14a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm14.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-6-11.75L6 16.25m7.25-9.5l4.75 9.5M7.25 18.5h9.5");
}
</style><path class="sinbrccnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mesh-wifi"} {...others} />);
}

export default Component;
