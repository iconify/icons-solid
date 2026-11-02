import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.qvv7a4knr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 20h-1a2 2 0 0 1-2-2v-4a2 2 0 0 0-2-2H6c-.738 0-1.369-.631-1-1l6-6a1.414 1.414 0 0 1 2 0l6 6c.369.369-.262 1-1 1h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2z");
}

.xoxmaybph {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 20a2 2 0 0 1-2-2v-4a2 2 0 0 0-2-2H6c-.738 0-1.369-.631-1-1l6-6a1.415 1.415 0 0 1 2 0l6 6c.369.369-.262 1-1 1h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2Z");
}
</style><g class="ft5dv1b6b"><path class="xoxmaybph"/><path class="qvv7a4knr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-up-duotone-round"} {...others} />);
}

export default Component;
