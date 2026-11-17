import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dj5-bebih {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m18 12l-6-6a4.242 4.242 0 1 1 6 6M6 12l6 6a4.242 4.242 0 1 1-6-6");
}

.ft5dv1b6b {
  fill: none;
}

.oekmrl02b {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m6 12l6 6a4.243 4.243 0 0 1-6-6m12 0l-6-6a4.243 4.243 0 0 1 6 6M6 18l-3 3M18 6l3-3M11 17l3-3m-7-1l3-3");
}
</style><g class="ft5dv1b6b"><path class="dj5-bebih"/><path class="oekmrl02b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:plug-connected-duotone"} {...others} />);
}

export default Component;
