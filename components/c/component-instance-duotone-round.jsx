import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dv4b2im0c {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m17 7l4 4a1.415 1.415 0 0 1 0 2l-8 8a1.415 1.415 0 0 1-2 0l-8-8a1.415 1.415 0 0 1 0-2l8-8a1.415 1.415 0 0 1 2 0Z");
}

.e4m0tmbcs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17 7l4 4a1.414 1.414 0 0 1 0 2l-8 8a1.414 1.414 0 0 1-2 0l-8-8a1.414 1.414 0 0 1 0-2l8-8a1.414 1.414 0 0 1 2 0z");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="dv4b2im0c"/><path class="e4m0tmbcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:component-instance-duotone-round"} {...others} />);
}

export default Component;
