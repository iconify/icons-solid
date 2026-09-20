import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.euu9_jb3j {
  fill: currentColor;
  d: path("m12 10.102l-4.246 4.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354l4.389-4.388q.13-.13.267-.184T12 9.015t.298.053t.268.184l4.388 4.388q.14.14.15.344t-.15.364t-.354.16t-.354-.16z");
}
</style><path class="euu9_jb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:expand-less-rounded"} {...others} />);
}

export default Component;
