import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qezkeklxh {
  fill: currentColor;
  d: path("M10.892 12L6.646 7.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l4.388 4.389q.131.13.184.267t.053.298t-.053.298t-.184.268l-4.388 4.388q-.14.14-.345.15q-.203.01-.363-.15t-.16-.354t.16-.354zm6.465-5.357q.143.144.143.357v10q0 .214-.143.357T17 17.5t-.357-.143T16.5 17V7q0-.213.143-.357T17 6.5t.357.143");
}
</style><path class="qezkeklxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:last-page-outline-rounded"} {...others} />);
}

export default Component;
