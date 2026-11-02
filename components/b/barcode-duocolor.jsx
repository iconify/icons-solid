import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ld1vm1efx {
  d: path("M4 5v14m8-14v14m8-14v14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x7irwtb8m {
  stroke-opacity: 0.4;
  d: path("M8 5v14m8-14v14");
}
</style><g class="nrj6p8qat"><path class="x7irwtb8m"/><path class="ld1vm1efx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:barcode-duocolor"} {...others} />);
}

export default Component;
