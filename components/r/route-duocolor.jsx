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

.tgd928bzt {
  d: path("M4 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0M16 6H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8");
}

.zx9_r_5jc {
  stroke-opacity: 0.4;
  d: path("M16 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><g class="nrj6p8qat"><path class="zx9_r_5jc"/><path class="tgd928bzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:route-duocolor"} {...others} />);
}

export default Component;
