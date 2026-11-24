import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ej5dri_zy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.414 20.414A2 2 0 0 1 18 21H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2m6 0h4a2 2 0 0 1 2 2v4M9.172 4.172A4 4 0 0 1 16 7v2M2 3l19 19");
}
</style><path class="ej5dri_zy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-off"} {...others} />);
}

export default Component;
