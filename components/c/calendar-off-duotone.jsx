import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.v8t2dbb8e {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 5h7a2.003 2.003 0 0 1 2 2v2h-5ZM9 9H4V7c0-.787.46-1.5 1.177-1.823Z");
}

.xsg5cr3sf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.823 19.823A2 2 0 0 1 18 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 1.177-1.823M11 5h7a2 2 0 0 1 2 2v7M4 9h5m6 0h5m-4-6v2M2 2l20 20");
}
</style><g class="ft5dv1b6b"><path class="v8t2dbb8e"/><path class="xsg5cr3sf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-off-duotone"} {...others} />);
}

export default Component;
