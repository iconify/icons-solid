import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gcb_nac6q.css';
import '../../css/q/qrp9jfhtm.css';
import '../../css/n/ni_p2fxgs.css';
import '../../css/n/nn7f_zb2c.css';
import '../../css/o/ovp7dlb_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gcb_nac6q wm-k"/><path class="qrp9jfhtm wm-a"/><path class="ni_p2fxgs wm-shadow"/><path class="nn7f_zb2c wm-k"/><path class="ovp7dlb_x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tree-deciduous-engrave"} {...others} />);
}

export default Component;
