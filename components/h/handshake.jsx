import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eekql3xep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 5c2-2 5-2 7-1l2 1h2m0-1v8l-2 2m-9-9L7 8a2.121 2.121 0 1 0 3 3l1-1a2.83 2.83 0 0 1 4 0l4 4a2.121 2.121 0 1 1-3 3l-3-3M3 4v12l3 3a2.121 2.121 0 1 0 3-3l2 2a2.121 2.121 0 1 0 3-3M3 5h7");
}
</style><path class="eekql3xep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:handshake"} {...others} />);
}

export default Component;
