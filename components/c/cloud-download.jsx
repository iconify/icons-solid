import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnmve2nwx.css';
import '../../css/d/dqit2kbwa.css';
import '../../css/h/hvos7j69n.css';
import '../../css/s/skag3ublr.css';
import '../../css/t/t4_ycr4-d.css';
import '../../css/p/pxblrb7zc.css';
import '../../css/x/xznhnib4u.css';
import '../../css/g/g-uo6m1_g.css';
import '../../css/w/w7p2q-4jf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnmve2nwx wm-shadow"/><path class="dqit2kbwa wm-k"/><path class="hvos7j69n wm-k"/><path class="skag3ublr wm-k"/><path class="t4_ycr4-d wm-k"/><path class="pxblrb7zc wm-k"/><path class="wm-shine xznhnib4u"/><path class="g-uo6m1_g wm-s"/><path class="w7p2q-4jf wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cloud-download"} {...others} />);
}

export default Component;
