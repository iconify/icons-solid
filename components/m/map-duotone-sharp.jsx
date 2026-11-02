import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a5vrkpmxc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8.553 2.106A1 1 0 0 1 10 3v15a1 1 0 0 1-.553.894l-6 3A1 1 0 0 1 2 21V6c0-.379.214-.725.553-.894Zm12 0A1 1 0 0 1 22 3v15a1 1 0 0 1-.553.894l-6 3A1 1 0 0 1 14 21V6c0-.379.214-.725.553-.894Z");
}

.ft5dv1b6b {
  fill: none;
}

.onbh0s3oc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 6l6-3l6 3l6-3v15l-6 3l-6-3l-6 3zm6-3v15m6-12v15");
}
</style><g class="ft5dv1b6b"><path class="a5vrkpmxc"/><path class="onbh0s3oc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:map-duotone-sharp"} {...others} />);
}

export default Component;
