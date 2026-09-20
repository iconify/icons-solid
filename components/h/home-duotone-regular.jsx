import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6e_o0bju {
  d: path("m3 11 9 -9 9 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pqqiwbo9y {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 11 9 -9 9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rdml8obcc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 11v9h12v-9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xil7tiu3o {
  d: path("M6 11v9h12v-9");
}
</style><g class="nrj6p8qat"><path class="pqqiwbo9y"/><path class="rdml8obcc"/><path class="a6e_o0bju"/><path class="xil7tiu3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:home-duotone-regular"} {...others} />);
}

export default Component;
