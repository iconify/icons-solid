import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mrsw-5m4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 2.5h1A3.5 3.5 0 0 1 16 6v12a3.5 3.5 0 0 1-3.5 3.5h-1A3.5 3.5 0 0 1 8 18V6a3.5 3.5 0 0 1 3.5-3.5M8 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3m8-12h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3");
}
</style><path class="mrsw-5m4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:see-more-like-this"} {...others} />);
}

export default Component;
