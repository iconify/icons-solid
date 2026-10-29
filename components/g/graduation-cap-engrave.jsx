import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b4i-chjwh.css';
import '../../css/f/fttdwcc-b.css';
import '../../css/y/ybto86sfo.css';
import '../../css/t/ttlc-na8v.css';
import '../../css/p/po6tsm3ou.css';
import '../../css/l/l2miw0nqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b4i-chjwh wm-k"/><path class="fttdwcc-b wm-a"/><path class="wm-shadow ybto86sfo"/><path class="ttlc-na8v wm-k"/><path class="po6tsm3ou wm-k"/><path class="l2miw0nqo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:graduation-cap-engrave"} {...others} />);
}

export default Component;
