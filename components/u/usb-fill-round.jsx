import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hck5hdcca {
  fill: currentColor;
  d: path("m8.293 5.293l3-3a1 1 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414L13 5.414v8.172l2-2V11a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-1.677-.909l-2.148 2.148a3 3 0 1 1-2.35 0l-2.431-2.43a3 3 0 1 1 .573-2.256L11 13.586V5.414L9.707 6.707a.999.999 0 1 1-1.414-1.414");
}
</style><path class="hck5hdcca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:usb-fill-round"} {...others} />);
}

export default Component;
