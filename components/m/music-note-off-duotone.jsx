import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bxekvxbzp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 20a3 3 0 1 1 0-6a3 3 0 0 1 0 6");
}

.ft5dv1b6b {
  fill: none;
}

.gb4nku8-k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 17a3 3 0 1 0 6 0a3 3 0 0 0-6 0m6 0v-3m0-6V6c0-.919 1.081-1.46 2-1l4 2M2 4l18 18");
}
</style><g class="ft5dv1b6b"><path class="bxekvxbzp"/><path class="gb4nku8-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:music-note-off-duotone"} {...others} />);
}

export default Component;
