import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ac86kbc6j {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 17l5-5a1.414 1.414 0 0 1 2 0l1 1m3-5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 9h6");
}

.ft5dv1b6b {
  fill: none;
}

.ref11mb6v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 11h-8a2 2 0 0 0-2 2v8H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z");
}
</style><g class="ft5dv1b6b"><path class="ref11mb6v"/><path class="ac86kbc6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:image-minus-corner-duotone"} {...others} />);
}

export default Component;
