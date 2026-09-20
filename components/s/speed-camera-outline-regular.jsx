import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.emda2p1-f {
  d: path("M18 7h3v5h-3");
}

.f9z-0kbvx {
  d: path("M6 21h10");
}

.ik6mh31gy {
  d: path("M11 14v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pjgjnzbhx {
  d: path("M4 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="pjgjnzbhx"/><path class="emda2p1-f"/><path class="ik6mh31gy"/><path class="f9z-0kbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:speed-camera-outline-regular"} {...others} />);
}

export default Component;
