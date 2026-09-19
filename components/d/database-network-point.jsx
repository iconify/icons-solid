import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/alaw1vzcj.css';
import '../../css/x/xqmg7ycna.css';
import '../../css/i/ifmva9g2b.css';
import '../../css/w/wwk6gdwuk.css';
import '../../css/l/l72am6s0n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="alaw1vzcj"/><path class="xqmg7ycna"/><path class="ifmva9g2b"/><path class="wwk6gdwuk"/><path class="l72am6s0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:database-network-point"} {...others} />);
}

export default Component;
