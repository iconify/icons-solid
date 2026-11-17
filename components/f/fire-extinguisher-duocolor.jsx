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

.p-tzjoy3w {
  stroke-opacity: 0.4;
  d: path("M13 5H9a4 4 0 0 0-4 4v7");
}

.tnaq6dlbq {
  d: path("M9 12a4 4 0 1 1 8 0v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm4-4V5l6-2M9 15h8");
}
</style><g class="nrj6p8qat"><path class="p-tzjoy3w"/><path class="tnaq6dlbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fire-extinguisher-duocolor"} {...others} />);
}

export default Component;
