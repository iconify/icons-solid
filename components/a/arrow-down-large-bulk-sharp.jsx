import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qx-73pble {
  fill: currentColor;
  d: path("m11.293 21.707l-6-6a.999.999 0 1 1 1.414-1.414L11 18.586V3a1 1 0 0 1 2 0v15.586l4.293-4.293a.999.999 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0");
}
</style><path class="qx-73pble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-large-bulk-sharp"} {...others} />);
}

export default Component;
