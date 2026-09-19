import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qxu3n4l1h {
  fill: currentColor;
  d: path("M22 6H12l-2-2H2v16h20zM12 17l-4-4l4-4v3h4v2h-4z");
}
</style><path class="qxu3n4l1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-drive-file-move-rtl"} {...others} />);
}

export default Component;
