import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dmseh2b3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 9v-2.25a2 2 0 0 1 4 0v2.25M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 16.5v-9.75a2 2 0 0 1 4 0v9.75m3.5-9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 9v-2.25a2 2 0 0 1 4 0v2.25");
}
</style><path class="dmseh2b3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crowd-wave"} {...others} />);
}

export default Component;
