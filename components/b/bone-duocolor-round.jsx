import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iq34xl16r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 10c.7-.7 1.3 0 2 0a2 2 0 1 0 0-4a1 1 0 0 1-1-1a2 2 0 1 0-4 0c0 .7.7 1.3 0 2l-7 7c-.7.7-1.3 0-2 0a2 2 0 1 0 0 4a1 1 0 0 1 1 1a2 2 0 1 0 4 0c0-.7-.7-1.3 0-2Z");
}
</style><path class="iq34xl16r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bone-duocolor-round"} {...others} />);
}

export default Component;
