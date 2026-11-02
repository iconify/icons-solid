import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0pcdybsa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 11h7a2 2 0 0 1 2 2v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4a2 2 0 0 1 2-2zm-6 0V3m12 8V3M6 5h12m-8-2v2m4-2v2M9 21v-3a3 3 0 0 1 6 0v3");
}
</style><path class="c0pcdybsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:castle-round"} {...others} />);
}

export default Component;
