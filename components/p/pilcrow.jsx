import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-zn_rb4f.css';
import '../../css/v/vp_-scb_a.css';
import '../../css/i/ios73fbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k z-zn_rb4f"/><path class="vp_-scb_a wm-k"/><path class="ios73fbpx wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pilcrow"} {...others} />);
}

export default Component;
