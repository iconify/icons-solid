import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s5_e1qyfn {
  d: path("M6 16a7.81 7.81 0 1 1 12 0v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm4 2v3m4-3v3");
}

.sdsm8gb8e {
  stroke-opacity: 0.4;
  d: path("M8 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><g class="nrj6p8qat"><path class="sdsm8gb8e"/><path class="s5_e1qyfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skull-duocolor"} {...others} />);
}

export default Component;
