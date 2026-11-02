import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p2-q61fsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 9V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4A5 5 0 0 1 7 9m3 5v2c0 2-3 2-3 5m7-7v2c0 2 3 2 3 5M6 21h12M7 5H5a2 2 0 1 0 0 4h2m10-4h2a2 2 0 1 1 0 4h-2");
}
</style><path class="p2-q61fsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:trophy-round"} {...others} />);
}

export default Component;
