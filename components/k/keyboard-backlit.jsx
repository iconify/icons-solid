import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q4o6qnbqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 10h20v10H2Zm4 3.5h.01m3.99 0h.01m3.99 0h.01m3.99 0h.01M8.5 16.75h7M12 3v3M6 4l1.5 2.5M18 4l-1.5 2.5");
}
</style><path class="q4o6qnbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:keyboard-backlit"} {...others} />);
}

export default Component;
