import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bons1-e1b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m5.311 6.238l7 4.5a1.502 1.502 0 0 1 0 2.524l-7 4.5A1.502 1.502 0 0 1 3 16.5v-9a1.501 1.501 0 0 1 2.311-1.262");
}

.ft5dv1b6b {
  fill: none;
}

.u84vyubqf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5.311 6.238l7 4.5a1.5 1.5 0 0 1 0 2.524l-7 4.5C4.313 18.404 3 17.687 3 16.5v-9c0-1.187 1.313-1.904 2.311-1.262M17 6v12m4-12v12");
}
</style><g class="ft5dv1b6b"><path class="bons1-e1b"/><path class="u84vyubqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play-pause-duotone"} {...others} />);
}

export default Component;
