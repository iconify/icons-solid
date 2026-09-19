import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m3r5xy_np {
  fill: currentColor;
  d: path("m13 8.2l-1-1l-4 4l-4-4l-1 1l4 4l-4 4l1 1l4-4l4 4l1-1l-4-4zM21 1H7v5h2V4h10v16H9v-2H7v5h14z");
}
</style><path class="m3r5xy_np"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-phonelink-erase"} {...others} />);
}

export default Component;
