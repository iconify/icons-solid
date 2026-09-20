import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0j1whzwq {
  d: path("M3 11h12c0 5 -3 8 -6 8s-6 -3 -6 -8");
}

.ev5f2vbwt {
  fill: currentColor;
  d: path("M3 11h12c0 5 -3 8 -6 8s-6 -3 -6 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pdahcqbfu {
  d: path("m15 11 6 -6");
}
</style><g class="nrj6p8qat"><path class="ev5f2vbwt"/><path class="c0j1whzwq"/><path class="pdahcqbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:frying-pan-duotone-regular"} {...others} />);
}

export default Component;
