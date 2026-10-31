import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/u/ulskczzlx.css';
import '../../css/h/huw37ubvu.css';
import '../../css/e/eedznf_bl.css';
import '../../css/q/qyl369xfe.css';
import '../../css/q/qm-4wsb8d.css';
import '../../css/b/b71_xgb2w.css';
import '../../css/k/kq3ysnbts.css';
import '../../css/e/eik2b7hmk.css';
import '../../css/y/yo79g7gnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><path class="ulskczzlx wm-shadow"/><path class="huw37ubvu wm-k"/><path class="eedznf_bl wm-k"/><path class="qyl369xfe wm-k"/><path class="qm-4wsb8d wm-k"/><path class="b71_xgb2w wm-k"/><path class="kq3ysnbts wm-a"/><path class="eik2b7hmk wm-a"/><path class="wm-a yo79g7gnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:firecracker"} {...others} />);
}

export default Component;
