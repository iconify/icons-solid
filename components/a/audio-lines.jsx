import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk8cd_zmb.css';
import '../../css/s/stgarl9zm.css';
import '../../css/h/hd_apab9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tk8cd_zmb wm-a"/><path class="stgarl9zm wm-k"/><path class="hd_apab9n wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:audio-lines"} {...others} />);
}

export default Component;
