import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lq3_vdb1k.css';
import '../../css/x/xdva2l4hq.css';
import '../../css/k/k43f8iybc.css';
import '../../css/w/w6yqqpbzf.css';
import '../../css/s/s72cg_rgx.css';
import '../../css/a/atlo8l4nz.css';
import '../../css/c/cer-ap1gn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="lq3_vdb1k"/><circle class="xdva2l4hq"/><path class="k43f8iybc"/><circle class="w6yqqpbzf"/><circle class="s72cg_rgx"/><path class="atlo8l4nz"/><path class="cer-ap1gn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:motorbike"} {...others} />);
}

export default Component;
