import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.qc-zzbbdr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 9l4-4a2.83 2.83 0 0 1 4 0l2 2a2.83 2.83 0 0 1 0 4l-8 8a2.83 2.83 0 0 1-4 0l-2-2a2.83 2.83 0 0 1 0-4zm-4 4l2 2m2-6l2 2m2-6l2 2");
}

.wecae785u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 5a2.83 2.83 0 0 1 4 0l2 2a2.83 2.83 0 0 1 0 4l-8 8a2.83 2.83 0 0 1-4 0l-2-2a2.83 2.83 0 0 1 0-4Z");
}
</style><g class="ft5dv1b6b"><path class="wecae785u"/><path class="qc-zzbbdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ruler-duotone-round"} {...others} />);
}

export default Component;
