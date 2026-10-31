import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h-0_dch2t.css';
import '../../css/m/m48q_sb2j.css';
import '../../css/t/ta6_k5exb.css';
import '../../css/d/dxstk724i.css';
import '../../css/c/cl3715p7f.css';
import '../../css/e/e0psaxbrx.css';
import '../../css/l/ldzghmbke.css';
import '../../css/n/nqm8v_j-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="h-0_dch2t"/><path class="m48q_sb2j"/><path class="ta6_k5exb wm-shine"/><path class="dxstk724i wm-k"/><path class="cl3715p7f wm-a"/><path class="e0psaxbrx"/><path class="ldzghmbke"/><path class="nqm8v_j-d wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:file-input"} {...others} />);
}

export default Component;
