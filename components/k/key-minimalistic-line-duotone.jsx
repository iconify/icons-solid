import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nhok2ib4c.css';
import '../../css/b/b8v7fbbdy.css';
import '../../css/c/ckcnl295s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nhok2ib4c"/><path class="b8v7fbbdy"/><path class="ckcnl295s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-minimalistic-line-duotone"} {...others} />);
}

export default Component;
