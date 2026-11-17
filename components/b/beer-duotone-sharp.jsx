import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqqy59bct {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 9c-2.661-4.004 3.327-7.996 6-4c2.673-3.996 8.661-.004 6 4v12H4Z");
}

.ft5dv1b6b {
  fill: none;
}

.kf8ilpdxe {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 9v12h12V9m0 3h1a3 3 0 0 1 0 6h-1m-8-5v4m4-4v4M4 9c-2.667-4 3.333-8 6-4c2.667-4 8.667 0 6 4z");
}
</style><g class="ft5dv1b6b"><path class="aqqy59bct"/><path class="kf8ilpdxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:beer-duotone-sharp"} {...others} />);
}

export default Component;
