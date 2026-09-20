import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhw73cmjs {
  d: path("M6 21V6l3 -3h7v12h3v6");
}

.eo_1d7bmr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 15h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.is2be0b4d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 21V6l3 -3h7v12h3v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.phi1ncbih {
  d: path("M6 15h10");
}
</style><g class="nrj6p8qat"><path class="is2be0b4d"/><path class="eo_1d7bmr"/><path class="dhw73cmjs"/><path class="phi1ncbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:child-seat-duotone-regular"} {...others} />);
}

export default Component;
