import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hmevflb0n {
  stroke-opacity: 0.4;
  d: path("m4 12l8 4l8-4M4 16l8 4l8-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y06mwtt6k {
  d: path("m8 6l4-2l8 4l-8 4l-8-4z");
}
</style><g class="nrj6p8qat"><path class="hmevflb0n"/><path class="y06mwtt6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:layers-duocolor-sharp"} {...others} />);
}

export default Component;
