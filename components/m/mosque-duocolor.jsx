import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.knd-3r4cj {
  d: path("M4 13h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 0a4 4 0 1 1 8 0M4 13V9m16 4V9M4 6c1 1.5 1 2 1 3H3c0-1 0-1.5 1-3m16 0c1 1.5 1 2 1 3h-2c0-1 0-1.5 1-3M10 21v-2a2 2 0 1 1 4 0v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.trqunnbmt {
  stroke-opacity: 0.4;
  d: path("M10.586 2.586a2 2 0 1 0 2.828 2.828M12 6v3");
}
</style><g class="nrj6p8qat"><path class="trqunnbmt"/><path class="knd-3r4cj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mosque-duocolor"} {...others} />);
}

export default Component;
