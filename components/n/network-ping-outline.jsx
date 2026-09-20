import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1-nahabz {
  fill: currentColor;
  d: path("M5.308 16.923v-1h6.288L3.692 8.019l.708-.688l7.6 7.575l5.046-5.046q-.119-.283-.179-.52t-.06-.439q0-.766.53-1.295q.528-.529 1.294-.529q.765 0 1.298.529q.533.528.533 1.294t-.531 1.298t-1.299.533q-.165 0-.377-.047q-.213-.047-.47-.161l-5.381 5.4h6.288v1z");
}
</style><path class="e1-nahabz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:network-ping-outline"} {...others} />);
}

export default Component;
