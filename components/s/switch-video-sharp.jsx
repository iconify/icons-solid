import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p57z75blu {
  fill: currentColor;
  d: path("m7.5 15.5l1.4-1.4L7.8 13h4.4l-1.1 1.1l1.4 1.4L16 12l-3.5-3.5l-1.4 1.4l1.1 1.1H7.8l1.1-1.1l-1.4-1.4L4 12zM2 20V4h16v6.5l4-4v11l-4-4V20z");
}
</style><path class="p57z75blu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:switch-video-sharp"} {...others} />);
}

export default Component;
