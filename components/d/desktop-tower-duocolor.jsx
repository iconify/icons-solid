import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.db_0x-2ax {
  d: path("M13 6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Zm0 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8m4-9h.01M17 13v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w9j05kbxw {
  stroke-opacity: 0.4;
  d: path("M6 20h3");
}
</style><g class="nrj6p8qat"><path class="w9j05kbxw"/><path class="db_0x-2ax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:desktop-tower-duocolor"} {...others} />);
}

export default Component;
