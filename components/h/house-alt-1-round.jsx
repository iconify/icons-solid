import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qfxdh1bjz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 17v1a3 3 0 0 0 6 0v-5c0-1.28-.36-2.36-1-3l-4-4a4.243 4.243 0 0 0-6 0l-4 4c-.64.64-1 1.72-1 3v5a3 3 0 0 0 6 0v-1a2 2 0 1 1 4 0");
}
</style><path class="qfxdh1bjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-alt-1-round"} {...others} />);
}

export default Component;
