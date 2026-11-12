import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.nrb-aq-1k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.828 19.828A4 4 0 0 1 17 21H7a4 4 0 0 1-4-4V7c0-1.105.448-2.105 1.172-2.828M9 3h8a4 4 0 0 1 4 4v8M3 17l7-7m6-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0M2 2l20 20");
}

.ry7z8qb_h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 3h8a4 4 0 0 1 4 4v8Zm10.828 16.828A3.97 3.97 0 0 1 17 21H7a4 4 0 0 1-4-4V7a3.97 3.97 0 0 1 1.172-2.828Z");
}
</style><g class="ft5dv1b6b"><path class="ry7z8qb_h"/><path class="nrb-aq-1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:image-off-duotone-round"} {...others} />);
}

export default Component;
