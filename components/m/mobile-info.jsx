import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce_v1otid.css';
import '../../css/i/i_xqkgcuh.css';
import '../../css/t/tw_7s6b8r.css';
import '../../css/o/ofdw__inh.css';
import '../../css/j/j4jcajbfq.css';
import '../../css/s/scl2a1b5a.css';
import '../../css/j/ji3byv7qt.css';
import '../../css/j/jzx08jtvn.css';
import '../../css/o/oqljh9zsi.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="ce_v1otid"/><path class="i_xqkgcuh"/><path class="tw_7s6b8r"/><path class="ofdw__inh"/><circle class="j4jcajbfq"/><path class="scl2a1b5a"/><path class="ji3byv7qt"/><circle class="jzx08jtvn"/><path class="oqljh9zsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mobile-info"} {...others} />);
}

export default Component;
