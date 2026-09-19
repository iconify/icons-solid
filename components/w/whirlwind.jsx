import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/l1pqr_bri.css';
import '../../css/t/t4o_z7khl.css';
import '../../css/r/ryuc04bif.css';
import '../../css/p/p2yu4yz6p.css';
import '../../css/q/q1juiplek.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="l1pqr_bri"/><path class="t4o_z7khl"/><path class="ryuc04bif"/><path class="p2yu4yz6p"/><path class="q1juiplek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:whirlwind"} {...others} />);
}

export default Component;
