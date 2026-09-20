import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.auc4o2swl {
  d: path("M4 8c0 8 16 8 16 0");
}

.bu35rpbki {
  d: path("M4 12c0 7 16 7 16 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r3uz_wvor {
  d: path("M4 6v15");
}

.vvv_0v-7b {
  d: path("M20 6v15");
}
</style><g class="nrj6p8qat"><path class="r3uz_wvor"/><path class="vvv_0v-7b"/><path class="auc4o2swl"/><path class="bu35rpbki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:hammock-outline-regular"} {...others} />);
}

export default Component;
