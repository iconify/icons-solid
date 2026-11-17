import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.jd-8xbccu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l6.222 5.444V17H5.778V8.444zm0 14v4m-8 0h16");
}

.oc44k1btf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18.222 8.444V17H5.778V8.444L12 3Z");
}
</style><g class="ft5dv1b6b"><path class="oc44k1btf"/><path class="jd-8xbccu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-connection-duotone-sharp"} {...others} />);
}

export default Component;
