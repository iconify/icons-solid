import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aofb1eb7k {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 11V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4h2a5 5 0 0 1-5 5h-1l2 5H8l2-5H9a5 5 0 0 1-5-5Z");
}

.ft5dv1b6b {
  fill: none;
}

.p6i9bjbip {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11h16a5 5 0 0 1-5 5h-1l2 5H8l2-5H9a5 5 0 0 1-5-5m2 0V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4");
}
</style><g class="ft5dv1b6b"><path class="aofb1eb7k"/><path class="p6i9bjbip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:toilet-alt-duotone-round"} {...others} />);
}

export default Component;
