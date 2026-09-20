import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mhy7p_bbp {
  fill: currentColor;
  d: path("M11.25 5.628v12.744l-3.456-3.639a.75.75 0 0 0-1.088 1.034l4.75 5a.75.75 0 0 0 1.088 0l4.75-5a.75.75 0 0 0-1.088-1.034l-3.456 3.639V5.628l3.456 3.639a.75.75 0 1 0 1.088-1.034l-4.75-4.998a.75.75 0 0 0-1.089 0L6.706 8.233a.75.75 0 1 0 1.088 1.034z");
}
</style><path class="mhy7p_bbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-bidirectional-up-down-24-regular"} {...others} />);
}

export default Component;
