import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.hhiju9uso {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0");
}

.z7lk-nbzd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 1v8m-4-6a5 5 0 1 1 8 0M3 12a9 9 0 0 1 18 0");
}
</style><g class="ft5dv1b6b"><path class="hhiju9uso"/><path class="z7lk-nbzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:podcast-duotone-sharp"} {...others} />);
}

export default Component;
