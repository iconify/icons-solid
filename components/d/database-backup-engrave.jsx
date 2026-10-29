import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zvuzrx56u.css';
import '../../css/w/w23qfacnz.css';
import '../../css/y/y95393_dl.css';
import '../../css/w/wci8o2bvn.css';
import '../../css/x/xfepiz__s.css';
import '../../css/r/rnsc04beb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zvuzrx56u"/><path class="w23qfacnz wm-shadow"/><path class="y95393_dl"/><path class="wci8o2bvn"/><path class="xfepiz__s"/><path class="rnsc04beb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:database-backup-engrave"} {...others} />);
}

export default Component;
