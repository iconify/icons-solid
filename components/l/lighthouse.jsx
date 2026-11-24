import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i3nm9yv7f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 12h6l3 9H6zm-2 0h10m-8 0V8H8l4-4l4 4h-1v4M3 21h18M7 18l9-3M3 9h2m14 0h2");
}
</style><path class="i3nm9yv7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lighthouse"} {...others} />);
}

export default Component;
