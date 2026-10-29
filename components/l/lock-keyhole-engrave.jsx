import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a-r7o131d.css';
import '../../css/p/p7j_tcb2n.css';
import '../../css/x/x5alubcsr.css';
import '../../css/h/hmb0o_-2y.css';
import '../../css/b/b86buo32x.css';
import '../../css/d/dyvgatb7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a-r7o131d wm-k"/><path class="p7j_tcb2n wm-a"/><path class="wm-shadow x5alubcsr"/><path class="hmb0o_-2y wm-a"/><path class="b86buo32x wm-k"/><path class="dyvgatb7a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lock-keyhole-engrave"} {...others} />);
}

export default Component;
