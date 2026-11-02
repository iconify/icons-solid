import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.gfitm7_7r {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h6a2 2 0 0 1 2 2v5c0 5.5-3.5 9-8 11c-4.5-2-8-5.5-8-11V5a2 2 0 0 1 2-2zm-2 6l4 4m0-4l-4 4");
}

.jicor6bql {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 3h6a2 2 0 0 1 2 2v5c-.003 5.351-3.324 8.92-8 11c-4.676-2.08-7.997-5.649-8-11V5a2 2 0 0 1 2-2Z");
}
</style><g class="ft5dv1b6b"><path class="jicor6bql"/><path class="gfitm7_7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shield-close-duotone"} {...others} />);
}

export default Component;
