import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.faeydrb7z {
  d: path("m15 6 6 6 -6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o5fs0raqq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 6 -6 6 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.onei9bb8c {
  d: path("m9 6 -6 6 6 6");
}

.qp_iv4crr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 6 6 6 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="o5fs0raqq"/><path class="qp_iv4crr"/><path class="onei9bb8c"/><path class="faeydrb7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:code-duotone-thin"} {...others} />);
}

export default Component;
