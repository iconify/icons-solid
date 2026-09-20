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

.oowiv7bzr {
  d: path("M14 8h8v8h-8Z");
}

.p39ktbcba {
  d: path("m7 8 4 4 -4 4 -4 -4Z");
}
</style><g class="nrj6p8qat"><path class="p39ktbcba"/><path class="oowiv7bzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:model-halt-outline-regular"} {...others} />);
}

export default Component;
