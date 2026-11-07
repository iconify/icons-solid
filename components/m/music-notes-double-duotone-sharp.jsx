import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a603h4tgb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 18a3 3 0 1 0 6 0a3 3 0 0 0-6 0m12-2a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-6 2V7l12-4v13M9 12l12-4");
}

.afqo38bdn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 19a3 3 0 1 1 0-6a3 3 0 0 1 0 6M6 21a3 3 0 1 1 0-6a3 3 0 0 1 0 6");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="afqo38bdn"/><path class="a603h4tgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:music-notes-double-duotone-sharp"} {...others} />);
}

export default Component;
