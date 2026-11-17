import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1fn4rz1b {
  stroke-opacity: 0.4;
  d: path("M9 11v6m6-6v6m-6-3h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.won6lobdl {
  d: path("M5 13a7 7 0 0 1 14 0v8H5zm7-7V3m-2 0h4");
}
</style><g class="nrj6p8qat"><path class="h1fn4rz1b"/><path class="won6lobdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hydrogen-duocolor-sharp"} {...others} />);
}

export default Component;
