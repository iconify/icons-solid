import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iwer1wtdo {
  cx: 18px;
  cy: 18px;
  r: 3px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o3bi57sdq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 14h.01M13 10h.01");
}

.oc0ozoajj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.13 14.63l10-10a3 3 0 0 1 4.24 4.24l-10 10a3 3 0 0 1-4.24-4.24");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="oc0ozoajj"/><path class="o3bi57sdq"/><circle class="iwer1wtdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cucumber"} {...others} />);
}

export default Component;
