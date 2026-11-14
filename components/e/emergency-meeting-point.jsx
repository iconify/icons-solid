import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u59oa9bad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 3l4.75 4.75m0-3.5v3.5h-3.5M21 3l-4.75 4.75m0-3.5v3.5h3.5M3 21l4.75-4.75m0 3.5v-3.5h-3.5M21 21l-4.75-4.75m0 3.5v-3.5h3.5M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="u59oa9bad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:emergency-meeting-point"} {...others} />);
}

export default Component;
