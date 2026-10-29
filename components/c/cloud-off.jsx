import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo4hbjgwx.css';
import '../../css/k/kxsqrtb3i.css';
import '../../css/l/l1lu7lbwx.css';
import '../../css/x/xcvx5wfvb.css';
import '../../css/t/tunu1mbsv.css';
import '../../css/k/kswty2b9h.css';
import '../../css/o/o2b0_ygwk.css';
import '../../css/u/ua4gn-t-z.css';
import '../../css/g/guqkx21ep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bo4hbjgwx wm-shadow"/><path class="kxsqrtb3i wm-k"/><path class="l1lu7lbwx wm-k"/><path class="wm-k xcvx5wfvb"/><path class="tunu1mbsv wm-k"/><path class="kswty2b9h wm-k"/><path class="o2b0_ygwk wm-shine"/><path class="ua4gn-t-z wm-s"/><path class="guqkx21ep wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cloud-off"} {...others} />);
}

export default Component;
