import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ekhob3buh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 13h4l3 3h4l3-3h4v7H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.l3a6zpdfy {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18v16H3Zm0 9h4l3 3h4l3-3h4");
}
</style><g class="ft5dv1b6b"><path class="ekhob3buh"/><path class="l3a6zpdfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:inbox-duotone-sharp"} {...others} />);
}

export default Component;
