import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.ktq5n9b5n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m8 6l4-2l8 4l-8 4l-8-4Z");
}

.z2f5sdbfa {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 6l4-2l8 4l-8 4l-8-4zm-4 6l8 4l8-4M4 16l8 4l8-4");
}
</style><g class="ft5dv1b6b"><path class="ktq5n9b5n"/><path class="z2f5sdbfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:layers-duotone-sharp"} {...others} />);
}

export default Component;
