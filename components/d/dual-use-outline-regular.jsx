import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ip--tabyt {
  d: path("M6 3.5 3.5 6 6 8.5");
}

.k60u16b4z {
  d: path("M9 10v3");
}

.m7_k7qbff {
  d: path("M15 10v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.twh8yufuk {
  d: path("M18 3.5 20.5 6 18 8.5");
}

.unyu66b5a {
  d: path("M6 15a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="unyu66b5a"/><path class="k60u16b4z"/><path class="m7_k7qbff"/><path class="ip--tabyt"/><path class="twh8yufuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:dual-use-outline-regular"} {...others} />);
}

export default Component;
