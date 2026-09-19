import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g75u_vbyt {
  fill: currentColor;
  d: path("M22 6H12l-2-2H2v16h20zm-9 7v4h-2v-4H8l4.01-4L16 13z");
}
</style><path class="g75u_vbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-drive-folder-upload"} {...others} />);
}

export default Component;
