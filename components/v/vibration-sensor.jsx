import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.obl15bknn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7.5h9v9h-9ZM12 12h.01M4.5 7.5L3 9.75L4.5 12L3 14.25l1.5 2.25m15-9L21 9.75L19.5 12l1.5 2.25l-1.5 2.25");
}
</style><path class="obl15bknn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:vibration-sensor"} {...others} />);
}

export default Component;
