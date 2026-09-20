import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xphw2z6aa.css';
import '../../css/l/lstp_mb9e.css';
import '../../css/r/rlqmokb5v.css';
import '../../css/u/u51pxsb8s.css';
import '../../css/r/rbzuoab3k.css';
import '../../css/n/nkuvr0yck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xphw2z6aa"/><path class="lstp_mb9e"/><path class="rlqmokb5v"/><path class="u51pxsb8s"/><path class="rbzuoab3k"/><path class="nkuvr0yck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-broken"} {...others} />);
}

export default Component;
