import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uezbo3btw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 1L16 1C18.2092 1 20 2.7908 20 5L20 19C20 21.2092 18.2092 23 16 23L8 23C5.7908 23 4 21.2092 4 19L4 5C4 2.7908 5.7908 1 8 1Z");
  stroke: none;
}

.vp7r_x3hr {
  d: path("M7 11L17 11M9 6L9 7M9 15L9 18");
}
</style><g class="nrj6p8qat"><path class="uezbo3btw"/><path class="vp7r_x3hr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:refrigerator-duotone"} {...others} />);
}

export default Component;
