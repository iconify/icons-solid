import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ly0gbcblz {
  fill: currentColor;
  d: path("M3.293 24.707a1 1 0 0 1 0-1.414L21.586 5H13a1 1 0 1 1 0-2h11a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6.414L4.707 24.707a1 1 0 0 1-1.414 0");
}
</style><path class="ly0gbcblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-right-28-filled"} {...others} />);
}

export default Component;
