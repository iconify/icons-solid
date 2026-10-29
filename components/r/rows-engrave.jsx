import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tgf0uybva.css';
import '../../css/l/lpxc06jjq.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/a/ae-e09b3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tgf0uybva wm-k"/><path class="lpxc06jjq wm-a"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="ae-e09b3w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rows-engrave"} {...others} />);
}

export default Component;
