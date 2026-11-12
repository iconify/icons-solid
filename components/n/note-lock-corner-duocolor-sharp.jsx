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

.p9nk_hb0c {
  d: path("M8 20H4V4h16v4");
}

.u6thig5fy {
  stroke-opacity: 0.4;
  d: path("M13 16h8v5h-8Zm2 0v-1a2 2 0 1 1 4 0v1");
}
</style><g class="nrj6p8qat"><path class="u6thig5fy"/><path class="p9nk_hb0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:note-lock-corner-duocolor-sharp"} {...others} />);
}

export default Component;
