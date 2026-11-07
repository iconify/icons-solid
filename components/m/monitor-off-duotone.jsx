import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c74zehbfe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 4h7a2.003 2.003 0 0 1 2 2v7Zm7 13H6a2.003 2.003 0 0 1-2-2V6c0-.787.46-1.5 1.177-1.823Z");
}

.ft5dv1b6b {
  fill: none;
}

.negq9xbia {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 17H6a2 2 0 0 1-2-2V6a2 2 0 0 1 1.177-1.823M11 4h7a2 2 0 0 1 2 2v7M9 20h6M3 2l19 19");
}
</style><g class="ft5dv1b6b"><path class="c74zehbfe"/><path class="negq9xbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:monitor-off-duotone"} {...others} />);
}

export default Component;
