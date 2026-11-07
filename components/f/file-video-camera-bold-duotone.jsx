import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgissgbda.css';
import '../../css/y/yh6ditbzn.css';
import '../../css/y/ycg7g-b4l.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgissgbda"/><path class="yh6ditbzn"/><path class="ycg7g-b4l"/><path class="x4f46-b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-video-camera-bold-duotone"} {...others} />);
}

export default Component;
