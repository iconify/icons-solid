import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.adzf2_byo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5.504 11.336l4-6c1.187-1.781 3.805-1.781 4.992 0l4 6C19.826 13.33 18.396 16 16 16H8c-2.396 0-3.825-2.67-2.496-4.664M5 20h14");
}
</style><path class="adzf2_byo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eject-round"} {...others} />);
}

export default Component;
