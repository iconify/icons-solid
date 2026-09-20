import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cit_55o-r.css';
import '../../css/w/wynl0fb6k.css';
import '../../css/q/qc63qhmzu.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cit_55o-r"/><path class="wynl0fb6k"/><path class="qc63qhmzu"/><path class="si_mtzbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:send-twice-square-broken"} {...others} />);
}

export default Component;
