import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eldtd1r2s.css';
import '../../css/b/bmf49mbpn.css';
import '../../css/x/xnuytgkwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="eldtd1r2s"/><path class="bmf49mbpn wm-shadow"/><path class="xnuytgkwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:virus-engrave"} {...others} />);
}

export default Component;
