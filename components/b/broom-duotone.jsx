import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.gt2a6aclq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 20H4l4-8h8l4 8zm-2 0v-3m4 3v-3M12 3v9");
}

.wijawsbjt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m3.106 19.553l4-8A1 1 0 0 1 8 11h8c.379 0 .725.214.894.553l4 8A1 1 0 0 1 20 21H4a1 1 0 0 1-.894-1.447");
}
</style><g class="ft5dv1b6b"><path class="wijawsbjt"/><path class="gt2a6aclq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:broom-duotone"} {...others} />);
}

export default Component;
