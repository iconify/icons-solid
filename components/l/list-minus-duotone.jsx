import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdgojzbxm {
  stroke-opacity: 0.4;
  d: path("M2 6L22 6M2 12L22 12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t4ug6db2s {
  d: path("M2 18L6 18M10 18L14 18M18 18L22 18");
}
</style><g class="nrj6p8qat"><path class="fdgojzbxm"/><path class="t4ug6db2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-minus-duotone"} {...others} />);
}

export default Component;
