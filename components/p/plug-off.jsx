import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wmdw8snqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 16V9a2 2 0 0 1 2-2h7m3 3v5a2 2 0 0 1-2 2h-5m1 0v4M9 3v4m6-4v4M2 20L20 2");
}
</style><path class="wmdw8snqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:plug-off"} {...others} />);
}

export default Component;
