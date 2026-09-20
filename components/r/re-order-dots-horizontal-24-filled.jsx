import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mh8-grb_d {
  fill: currentColor;
  d: path("M7 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}
</style><path class="mh8-grb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:re-order-dots-horizontal-24-filled"} {...others} />);
}

export default Component;
