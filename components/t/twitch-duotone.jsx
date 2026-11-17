import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6l6oduar {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7v4m4-4v4M4 3h16v10l-4 4h-4l-4 4v-4H4Z");
}

.ft5dv1b6b {
  fill: none;
}

.yjvl6lmhq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 3h16v10l-4 4h-4l-4 4v-4H4Z");
}
</style><g class="ft5dv1b6b"><path class="yjvl6lmhq"/><path class="a6l6oduar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:twitch-duotone"} {...others} />);
}

export default Component;
