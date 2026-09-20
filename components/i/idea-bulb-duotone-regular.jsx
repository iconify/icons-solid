import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b32qokucr {
  fill: currentColor;
  d: path("M8 12a6 6 0 1 1 8 0v3H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p937wxhzi {
  d: path("M10 21h4");
}

.usr9unc6p {
  d: path("M8 12a6 6 0 1 1 8 0v3H8Z");
}

.x3sflacnk {
  d: path("M9 18h6");
}
</style><g class="nrj6p8qat"><path class="b32qokucr"/><path class="usr9unc6p"/><path class="x3sflacnk"/><path class="p937wxhzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:idea-bulb-duotone-regular"} {...others} />);
}

export default Component;
