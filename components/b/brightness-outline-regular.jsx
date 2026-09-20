import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dx5s6zbrc {
  d: path("M8 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.e0ead5bmw {
  d: path("M3 12h3");
}

.f8057zb1p {
  d: path("M18 12h3");
}

.jnf_2db5t {
  d: path("M12 18v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="nrj6p8qat"><path class="dx5s6zbrc"/><path class="yazo7scbq"/><path class="jnf_2db5t"/><path class="e0ead5bmw"/><path class="f8057zb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:brightness-outline-regular"} {...others} />);
}

export default Component;
