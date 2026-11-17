import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.p9x1fl7gj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 8a5 5 0 1 1 10.001.001A5 5 0 0 1 7 8M4 21c0-2.209 3.582-4 8-4s8 1.791 8 4Z");
}

.w85-lohkm {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 8a5 5 0 1 0 10 0A5 5 0 0 0 7 8M4 21c0-2.21 3.582-4 8-4s8 1.79 8 4");
}
</style><g class="ft5dv1b6b"><path class="p9x1fl7gj"/><path class="w85-lohkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:user-alt-duotone-round"} {...others} />);
}

export default Component;
