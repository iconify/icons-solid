import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wfqbd5jqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 16h-9V4.5h14v7.7m2.487.043L16.5 11V8.5l5-2.5v7.5l-1.708-.854M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3-3v6");
}
</style><path class="wfqbd5jqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:exposure-video"} {...others} />);
}

export default Component;
