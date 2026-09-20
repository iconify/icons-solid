import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ej8q8nr7x {
  fill: currentColor;
  d: path("M4 5h10v6H4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ez1_3xbuo {
  d: path("M14 8h7");
}

.nguhiybnr {
  d: path("M4 5h10v6H4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r411km12t {
  d: path("M6 11v9h4v-9");
}
</style><g class="nrj6p8qat"><path class="ej8q8nr7x"/><path class="nguhiybnr"/><path class="r411km12t"/><path class="ez1_3xbuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:drill-duotone-regular"} {...others} />);
}

export default Component;
