import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ckctb4ljv {
  d: path("M7.3 15.79a5 5 0 0 1 9.4 0");
}

.iml3cbclx {
  d: path("M8 7a4 4 0 0 1 8 0");
}

.ivqg9reic {
  d: path("M11 17.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wxrq2_b_h {
  d: path("M10.12 16.82a2 2 0 0 1 3.76 0");
}

.xfs8wlfhn {
  d: path("M5 11.5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="xfs8wlfhn"/><path class="iml3cbclx"/><path class="ckctb4ljv"/><path class="wxrq2_b_h"/><path class="ivqg9reic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:side-channel-outline-regular"} {...others} />);
}

export default Component;
