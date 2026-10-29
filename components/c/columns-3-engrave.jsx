import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/duslw9m1c.css';
import '../../css/p/pfu4sen9o.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/o/oijoyrt4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="duslw9m1c wm-k"/><path class="pfu4sen9o wm-a"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="oijoyrt4u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:columns-3-engrave"} {...others} />);
}

export default Component;
