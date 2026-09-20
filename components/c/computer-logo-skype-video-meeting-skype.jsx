import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a75hd-wnc.css';
import '../../css/y/yu04o0y7e.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="a75hd-wnc"/><path class="yu04o0y7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-logo-skype-video-meeting-skype"} {...others} />);
}

export default Component;
