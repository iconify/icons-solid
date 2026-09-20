import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tojc858qr.css';
import '../../css/d/dpy41yb4l.css';
import '../../css/s/stflcpnkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tojc858qr"/><path class="dpy41yb4l"/><path class="stflcpnkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:camera-video-off-2"} {...others} />);
}

export default Component;
