import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sap-bfblw.css';
import '../../css/k/ku7mm9bqf.css';
import '../../css/g/gz1zp7swd.css';
import '../../css/s/s50jvtbpk.css';
import '../../css/a/annjccffn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sap-bfblw"/><path class="ku7mm9bqf wm-k"/><path class="gz1zp7swd wm-a"/><path class="s50jvtbpk wm-k"/><path class="annjccffn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-sketch"} {...others} />);
}

export default Component;
