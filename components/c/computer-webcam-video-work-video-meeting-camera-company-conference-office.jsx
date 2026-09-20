import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-15t6b5h.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="t-15t6b5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-webcam-video-work-video-meeting-camera-company-conference-office"} {...others} />);
}

export default Component;
