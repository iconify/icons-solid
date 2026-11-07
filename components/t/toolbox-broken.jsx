import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s7utufbjt.css';
import '../../css/i/iv23kgeik.css';
import '../../css/w/w5kufji0i.css';
import '../../css/l/l0yse_bmm.css';
import '../../css/p/pdgfcn4hi.css';
import '../../css/s/s5we7yb4z.css';
import '../../css/x/xkf_qjbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s7utufbjt"/><path class="iv23kgeik"/><path class="w5kufji0i"/><path class="l0yse_bmm"/><path class="pdgfcn4hi"/><path class="s5we7yb4z"/><path class="xkf_qjbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:toolbox-broken"} {...others} />);
}

export default Component;
