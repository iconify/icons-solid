import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.xhu8hacrv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 7l9 5l-9 5Zm9 0l9 5l-9 5Z");
}

.z9i_qvb9c {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 12l-9 5V7Zm9 0l-9 5V7Z");
}
</style><g class="ft5dv1b6b"><path class="z9i_qvb9c"/><path class="xhu8hacrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fast-forward-duotone-sharp"} {...others} />);
}

export default Component;
