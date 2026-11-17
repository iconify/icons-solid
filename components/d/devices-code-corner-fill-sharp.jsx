import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ks555vbsv {
  fill: currentColor;
  d: path("M21 14h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1m-11 3H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H4v10h6a1 1 0 0 1 0 2m5.707.707L14.414 19l1.293 1.293a.999.999 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a.999.999 0 1 1 1.414 1.414m4-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a.999.999 0 1 1-1.414-1.414L19.586 19l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="ks555vbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:devices-code-corner-fill-sharp"} {...others} />);
}

export default Component;
