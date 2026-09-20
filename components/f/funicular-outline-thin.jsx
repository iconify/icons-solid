import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ko7vgklqj {
  d: path("m4 20 4 -4h6l-4 4Z");
}

.rki_rg93o {
  d: path("m12 12 4 -4h6l-4 4Z");
}

.uudyrgb2a {
  d: path("M2 21 21 2");
}
</style><g class="hntgybcog"><path class="uudyrgb2a"/><path class="ko7vgklqj"/><path class="rki_rg93o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:funicular-outline-thin"} {...others} />);
}

export default Component;
