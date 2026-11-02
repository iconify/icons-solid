import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bmkj1ccye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 19v-5H8a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v5a2 2 0 0 1-2 2h-2v5a2 2 0 1 1-4 0m-4-9h12m-8-7v3m4-3v3");
}
</style><path class="bmkj1ccye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:brush-round"} {...others} />);
}

export default Component;
