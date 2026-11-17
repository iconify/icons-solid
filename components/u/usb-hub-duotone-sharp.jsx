import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.vfhccdb3m {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 3h6v4H9ZM3 13h18v8H3Z");
}

.ya8jth7la {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 13h18v8H3ZM9 3h6v4H9Zm3 4v6m-5 4h2m6 0h2");
}
</style><g class="ft5dv1b6b"><path class="vfhccdb3m"/><path class="ya8jth7la"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:usb-hub-duotone-sharp"} {...others} />);
}

export default Component;
