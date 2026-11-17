import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.t82mazbul {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 6v11a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V6Z");
}

.ui0o6bxsw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6v11a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V6M4 6h16M8 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3");
}
</style><g class="ft5dv1b6b"><path class="t82mazbul"/><path class="ui0o6bxsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:trash-duotone-round"} {...others} />);
}

export default Component;
