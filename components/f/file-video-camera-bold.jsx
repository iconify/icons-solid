import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8q5j9dzg.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t8q5j9dzg"/><path class="wm3j448rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-video-camera-bold"} {...others} />);
}

export default Component;
