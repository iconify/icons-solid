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

.ps2grmsyv {
  stroke-opacity: 0.4;
  d: path("m11 10l2 2l4-4");
}

.q0wjg6bop {
  d: path("M7 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2ZM3 9v10a2 2 0 0 0 2 2h10");
}
</style><g class="nrj6p8qat"><path class="ps2grmsyv"/><path class="q0wjg6bop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-check-duocolor"} {...others} />);
}

export default Component;
