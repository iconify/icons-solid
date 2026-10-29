import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kndz0vbaa.css';
import '../../css/q/qm6hnbcbn.css';
import '../../css/z/z7xwoob6x.css';
import '../../css/j/jqmsa65kv.css';
import '../../css/e/ec96akbth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kndz0vbaa"/><path class="qm6hnbcbn wm-k"/><path class="wm-a z7xwoob6x"/><path class="jqmsa65kv wm-k"/><path class="ec96akbth wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:printer-sketch"} {...others} />);
}

export default Component;
