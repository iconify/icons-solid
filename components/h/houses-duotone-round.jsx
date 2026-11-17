import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bywockbiu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 21H3v-5.81a4 4 0 0 1 1.366-3.01l1.134-.992a3.795 3.795 0 0 1 5 0l1.134.992A4 4 0 0 1 13 15.19Z");
}

.ft5dv1b6b {
  fill: none;
}

.yd3n2y4se {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 21h8m-8 0H3v-5.81a4 4 0 0 1 1.366-3.01l1.134-.992a3.796 3.796 0 0 1 5 0l1.134.992A4 4 0 0 1 13 15.19zm0-14h.01M17 7h.01M17 11h.01M17 15h.01M9 9.875V3h8a4 4 0 0 1 4 4v14");
}
</style><g class="ft5dv1b6b"><path class="bywockbiu"/><path class="yd3n2y4se"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:houses-duotone-round"} {...others} />);
}

export default Component;
