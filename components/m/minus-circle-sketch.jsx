import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/otbqr_zzw.css';
import '../../css/z/z-cabbcfr.css';
import '../../css/q/qcxu_iduf.css';
import '../../css/t/tt67h0p8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="otbqr_zzw wm-k"/><path class="wm-k z-cabbcfr"/><path class="qcxu_iduf wm-k"/><path class="tt67h0p8u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:minus-circle-sketch"} {...others} />);
}

export default Component;
