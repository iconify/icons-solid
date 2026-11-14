import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vqtuv01cc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 10L4 6.5c-1-.5-1.5 0-1.5 1v9c0 1 .5 1.5 1.5 1l6-3.5m4-4l6-3.5c1-.5 1.5 0 1.5 1v9c0 1-.5 1.5-1.5 1L14 14m-4-4.5h4v5h-4Z");
}
</style><path class="vqtuv01cc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bow-tie"} {...others} />);
}

export default Component;
