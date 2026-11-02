import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i82rs5bju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="i82rs5bju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:more-vertical"} {...others} />);
}

export default Component;
