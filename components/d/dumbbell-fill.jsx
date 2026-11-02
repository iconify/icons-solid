import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvaohjbje {
  fill: currentColor;
  d: path("M6 4h2a2 2 0 0 1 2 2v5h4V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5h-4v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2V6a2 2 0 0 1 2-2");
}
</style><path class="bvaohjbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dumbbell-fill"} {...others} />);
}

export default Component;
