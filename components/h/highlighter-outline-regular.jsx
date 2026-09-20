import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mckspnbyn {
  d: path("M3 17h9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t3_tm1wcl {
  d: path("m14 8 4 -4");
}

.ucbzzjbat {
  d: path("m11 11 3 -3 2 2 -3 3Z");
}
</style><g class="nrj6p8qat"><path class="ucbzzjbat"/><path class="t3_tm1wcl"/><path class="mckspnbyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:highlighter-outline-regular"} {...others} />);
}

export default Component;
