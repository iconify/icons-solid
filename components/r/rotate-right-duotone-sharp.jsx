import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aksdottto {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 14v6h14V6h-3m-4 0H5v4m4-7l3 3l-3 3");
}

.ft5dv1b6b {
  fill: none;
}

.hnbhdrb-u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 6v14H5V6Z");
}
</style><g class="ft5dv1b6b"><path class="hnbhdrb-u"/><path class="aksdottto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:rotate-right-duotone-sharp"} {...others} />);
}

export default Component;
