import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e6aflmb2e {
  fill: currentColor;
  d: path("M4.616 19q-.667 0-1.141-.475T3 17.386V6.615q0-.666.475-1.14T4.615 5H8v14zM9 19V5h10.385q.666 0 1.14.475T21 6.615v10.77q0 .666-.475 1.14t-1.14.475z");
}
</style><path class="e6aflmb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:thumbnail-bar-rounded"} {...others} />);
}

export default Component;
