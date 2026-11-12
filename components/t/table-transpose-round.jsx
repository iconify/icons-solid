import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.srbd3m2kt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 5a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4h-6a2 2 0 0 1-2-2m-8 8a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0Zm15 6h-4v-4m0 4l6-6");
}
</style><path class="srbd3m2kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-transpose-round"} {...others} />);
}

export default Component;
