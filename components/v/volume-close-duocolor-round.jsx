import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eiuvhjh8d {
  stroke-opacity: 0.4;
  d: path("m15 9l6 6m0-6l-6 6");
}

.ihhy5kb9w {
  d: path("M11 7v10c0 1.107-1.262 1.738-2 1l-1-1c-.64-.64-1.36-1-2-1H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1c.64 0 1.36-.36 2-1l1-1c.738-.738 2-.107 2 1");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="eiuvhjh8d"/><path class="ihhy5kb9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:volume-close-duocolor-round"} {...others} />);
}

export default Component;
