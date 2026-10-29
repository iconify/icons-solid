import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/ht_8w2igq.css';
import '../../css/f/fvd2_cciw.css';
import '../../css/v/vwlpmvbuf.css';
import '../../css/k/kfg0anbux.css';
import '../../css/x/x0wfh-5ox.css';
import '../../css/l/l0_8r-6fb.css';
import '../../css/y/yakhjr-at.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ht_8w2igq wm-k"/><path class="fvd2_cciw wm-a"/><path class="vwlpmvbuf wm-shadow"/><path class="kfg0anbux wm-k"/><path class="wm-a x0wfh-5ox"/><path class="l0_8r-6fb wm-k"/><path class="wm-a yakhjr-at"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shuffle-engrave"} {...others} />);
}

export default Component;
