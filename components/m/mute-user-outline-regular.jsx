import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f69zonn4h {
  d: path("M4 17a4 4 0 0 1 8 0");
}

.m15ww7bpj {
  d: path("M15 12c2.5 0 4 1 4 3s-1.5 3 -4 3Z");
}

.mx7ei53xw {
  d: path("m14 19 7 -7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q8-0ejn0y {
  d: path("M5 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="q8-0ejn0y"/><path class="f69zonn4h"/><path class="m15ww7bpj"/><path class="mx7ei53xw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:mute-user-outline-regular"} {...others} />);
}

export default Component;
