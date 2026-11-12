import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qvhn5xc3e {
  fill: currentColor;
  d: path("M21 12h-9.586l-1.707-1.707a1 1 0 0 0-1.414 0L2 16.586V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1m-6-2a2 2 0 1 0 .001-3.999A2 2 0 0 0 15 10m-6 2.414l2.707 2.707a1 1 0 0 0 .293.203V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.676a1 1 0 0 0 .293-.203Zm10.708 5.879l1.999 2a.999.999 0 1 1-1.414 1.414l-2-1.999a3 3 0 1 1 1.415-1.415M16 17a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="qvhn5xc3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:image-search-corner-fill-sharp"} {...others} />);
}

export default Component;
