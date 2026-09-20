import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ia4sldbfw {
  d: path("M3 21a9 9 0 0 1 18 0");
}

.ikiprn9sq {
  d: path("M9 14h6");
}

.kdybz_aht {
  d: path("M9 17h6");
}

.le41ikb_c {
  fill: currentColor;
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m91it7bsg {
  d: path("M9 20h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="le41ikb_c"/><path class="pemn838wn"/><path class="ia4sldbfw"/><path class="ikiprn9sq"/><path class="kdybz_aht"/><path class="m91it7bsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:data-subject-request-duotone-regular"} {...others} />);
}

export default Component;
