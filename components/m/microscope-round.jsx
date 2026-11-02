import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4rwlkb7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 6h6v4a3 3 0 0 1-6 0zm1 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2M3 21h18M6 17h8m0 4a6 6 0 0 0 6-6a5 5 0 0 0-5-5h-2");
}
</style><path class="c4rwlkb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:microscope-round"} {...others} />);
}

export default Component;
