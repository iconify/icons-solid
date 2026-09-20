import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qle2ntjgu.css';
import '../../css/q/qgo3xbcao.css';
import '../../css/p/pxi4ntbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qle2ntjgu"/><path class="qgo3xbcao"/><rect transform="rotate(44.97 12.113 1)" class="pxi4ntbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:corkscrew-line-duotone"} {...others} />);
}

export default Component;
