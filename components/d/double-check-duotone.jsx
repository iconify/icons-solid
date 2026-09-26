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

.swa_msm2n {
  stroke-opacity: 0.4;
  d: path("M2.5 11L7.1667 16L16.5 6");
}

.v-rljbbxp {
  d: path("M21.5 11L15.5 18L13.5 16");
}
</style><g class="nrj6p8qat"><path class="swa_msm2n"/><path class="v-rljbbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:double-check-duotone"} {...others} />);
}

export default Component;
