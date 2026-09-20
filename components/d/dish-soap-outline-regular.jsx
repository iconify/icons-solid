import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo88vlbuz {
  d: path("M16 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ktolme9hl {
  d: path("M6 21v-9c0 -2 2 -3 2 -4V5h4v3c0 1 2 2 2 4v9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qdo_xac7v {
  d: path("M8 5V2h4v3");
}
</style><g class="nrj6p8qat"><path class="ktolme9hl"/><path class="qdo_xac7v"/><path class="bo88vlbuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:dish-soap-outline-regular"} {...others} />);
}

export default Component;
