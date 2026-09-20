import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ia4sldbfw {
  d: path("M3 21a9 9 0 0 1 18 0");
}

.kxfa7js9d {
  d: path("m13 14.5 2.5 2.5 -2.5 2.5");
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

.ubqf9ccbc {
  d: path("M9 17h6.5");
}
</style><g class="nrj6p8qat"><path class="pemn838wn"/><path class="ia4sldbfw"/><path class="ubqf9ccbc"/><path class="kxfa7js9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:delegate-access-outline-regular"} {...others} />);
}

export default Component;
