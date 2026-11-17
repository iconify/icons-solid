import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9-1l5mhc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12v9h12v-9a6.1 6.1 0 0 0-12 0m0 0h12M9.27 7.006A6.1 6.1 0 0 1 21 8m-8.653 0H21m0 0v9h-6");
}

.ft5dv1b6b {
  fill: none;
}

.wo693nbwj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 21v-9a6.1 6.1 0 0 1 12 0v9Z");
}
</style><g class="ft5dv1b6b"><path class="wo693nbwj"/><path class="f9-1l5mhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:biogas-plant-duotone-sharp"} {...others} />);
}

export default Component;
