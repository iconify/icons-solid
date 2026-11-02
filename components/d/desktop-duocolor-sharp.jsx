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

.skphosbit {
  stroke-opacity: 0.4;
  d: path("M9 20h6");
}

.tjaq3hbif {
  d: path("M4 4h16v13H4Zm0 9h16");
}
</style><g class="nrj6p8qat"><path class="skphosbit"/><path class="tjaq3hbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:desktop-duocolor-sharp"} {...others} />);
}

export default Component;
