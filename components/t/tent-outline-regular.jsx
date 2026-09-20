import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hc7fbd-jo {
  d: path("M4 19h16");
}

.i6clenrss {
  d: path("M2 16 12 6l10 10Z");
}

.lf2ilxqms {
  d: path("m12 11 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vqy-3paam {
  d: path("m12 11 -5 5");
}
</style><g class="nrj6p8qat"><path class="i6clenrss"/><path class="vqy-3paam"/><path class="lf2ilxqms"/><path class="hc7fbd-jo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:tent-outline-regular"} {...others} />);
}

export default Component;
