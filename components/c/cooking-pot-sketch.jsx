import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qvsrqxb7i.css';
import '../../css/b/bm73mgd1w.css';
import '../../css/x/xrhs2pb-k.css';
import '../../css/a/avrbzj-lo.css';
import '../../css/n/npu7_3byv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qvsrqxb7i"/><path class="bm73mgd1w wm-k"/><path class="wm-a xrhs2pb-k"/><path class="avrbzj-lo wm-k"/><path class="npu7_3byv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cooking-pot-sketch"} {...others} />);
}

export default Component;
