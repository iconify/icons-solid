import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.iitonczcf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m3 3l12 4l-4 1l1 1a1.415 1.415 0 0 1 0 2l-1 1a1.415 1.415 0 0 1-2 0l-1-1l-1 4Z");
}

.pkquy3oor {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 3l12 4l-4 1l1 1a1.414 1.414 0 0 1 0 2l-1 1a1.414 1.414 0 0 1-2 0l-1-1l-1 4zm16 11a3.606 3.606 0 1 1-4 6a3.606 3.606 0 0 1 4-6m-4 6l4-6");
}
</style><g class="ft5dv1b6b"><path class="iitonczcf"/><path class="pkquy3oor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cursor-not-allowed-duotone-round"} {...others} />);
}

export default Component;
