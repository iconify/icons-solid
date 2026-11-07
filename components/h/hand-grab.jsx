import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nz26kpbeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 12V9a2 2 0 1 1 4 0a2 2 0 1 1 4 0a2 2 0 1 1 4 0v6a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-3a2 2 0 1 1 4 0m4-3v3m4-3v3m-8 0v3");
}
</style><path class="nz26kpbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hand-grab"} {...others} />);
}

export default Component;
