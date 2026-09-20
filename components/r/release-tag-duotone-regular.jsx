import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a7vpafiwa {
  d: path("M6 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.fmjpvzbts {
  d: path("M11 14h5");
}

.l6cp2-b8s {
  fill: currentColor;
  d: path("M6 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.msaz94ywr {
  d: path("M11 10h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.om5ur5t0p {
  fill: currentColor;
  d: path("m2 12 7 -7h12v14H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x9kn15bcl {
  d: path("m2 12 7 -7h12v14H9Z");
}
</style><g class="nrj6p8qat"><path class="om5ur5t0p"/><path class="l6cp2-b8s"/><path class="x9kn15bcl"/><path class="a7vpafiwa"/><path class="msaz94ywr"/><path class="fmjpvzbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:release-tag-duotone-regular"} {...others} />);
}

export default Component;
