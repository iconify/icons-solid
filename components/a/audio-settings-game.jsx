import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l0p75sbkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h10m4 0h4M3 11.25h3m4 0h10.9M3 18h3m4 0h2.2M13 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-7 6.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM6 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9-1.25h2.5L21 14.5v7l-3.5-2.25H15Z");
}
</style><path class="l0p75sbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:audio-settings-game"} {...others} />);
}

export default Component;
