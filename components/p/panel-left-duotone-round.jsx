import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_g6oh5kk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm5-4v16");
}

.ft5dv1b6b {
  fill: none;
}

.t8xi8pkds {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 20a1 1 0 0 1-1 1H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h1a1 1 0 0 1 1 1Z");
}
</style><g class="ft5dv1b6b"><path class="t8xi8pkds"/><path class="f_g6oh5kk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:panel-left-duotone-round"} {...others} />);
}

export default Component;
