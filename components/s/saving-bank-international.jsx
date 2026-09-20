import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pg-7rmowb.css';
import '../../css/q/q3x-3h0tm.css';
import '../../css/n/n9r6qcbxm.css';
import '../../css/a/ad3gblb_k.css';
import '../../css/l/l47-zv2tk.css';
import '../../css/h/hc5m_0b6d.css';
import '../../css/l/l7voeovap.css';
import '../../css/k/kxn3ujbko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pg-7rmowb"/><path class="q3x-3h0tm"/><path class="n9r6qcbxm"/><path class="ad3gblb_k"/><path class="l47-zv2tk"/><path class="hc5m_0b6d"/><path class="l7voeovap"/><path class="kxn3ujbko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:saving-bank-international"} {...others} />);
}

export default Component;
