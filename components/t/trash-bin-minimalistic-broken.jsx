import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qn7ra9bpb.css';
import '../../css/o/oxji76bkm.css';
import '../../css/c/ck-x5--3n.css';
import '../../css/p/p2-mbsbue.css';
import '../../css/w/w8w5t9ikw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qn7ra9bpb"/><path class="oxji76bkm"/><path class="ck-x5--3n"/><path class="p2-mbsbue"/><path class="w8w5t9ikw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-minimalistic-broken"} {...others} />);
}

export default Component;
