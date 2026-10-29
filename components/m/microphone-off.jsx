import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp4di_bcc.css';
import '../../css/p/ptfawwbss.css';
import '../../css/j/j166m3kbz.css';
import '../../css/j/jq0e-acpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a yp4di_bcc"/><path class="ptfawwbss wm-k"/><path class="j166m3kbz wm-k"/><path class="jq0e-acpr wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:microphone-off"} {...others} />);
}

export default Component;
