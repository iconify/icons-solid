import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fcpk6vb4x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h10v7h-3v11H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.l06uccj5e {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12V3h10v7m-3 11H3v-9m11 6l3 3l3-3m-3 3v-8");
}
</style><g class="ft5dv1b6b"><path class="fcpk6vb4x"/><path class="l06uccj5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mobile-download-corner-duotone-sharp"} {...others} />);
}

export default Component;
