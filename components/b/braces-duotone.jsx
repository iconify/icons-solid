import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ga4spfbxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 7H7a1 1 0 0 0-1 1v1c0 .64-.36 1.36-1 2a1.414 1.414 0 0 0 0 2c.64.64 1 1.36 1 2v1a1 1 0 0 0 1 1h1m8-10h1a1 1 0 0 1 1 1v1c0 .64.36 1.36 1 2a1.414 1.414 0 0 1 0 2c-.64.64-1 1.36-1 2v1a1 1 0 0 1-1 1h-1");
}
</style><path class="ga4spfbxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:braces-duotone"} {...others} />);
}

export default Component;
