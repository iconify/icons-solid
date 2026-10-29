import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq_ys_bwr.css';
import '../../css/j/j6fphobrx.css';
import '../../css/p/p_pv0tb1i.css';
import '../../css/s/sbiermbnx.css';
import '../../css/k/ktzroz9pd.css';
import '../../css/i/ioq889bdt.css';
import '../../css/d/d8mbembfw.css';
import '../../css/t/tw249mnmd.css';
import '../../css/j/j8e_irkdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nq_ys_bwr wm-k"/><path class="j6fphobrx wm-k"/><path class="p_pv0tb1i wm-k"/><path class="sbiermbnx wm-k"/><path class="ktzroz9pd wm-k"/><path class="ioq889bdt wm-k"/><path class="d8mbembfw wm-shine"/><path class="tw249mnmd wm-a"/><path class="j8e_irkdz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:panel-right"} {...others} />);
}

export default Component;
