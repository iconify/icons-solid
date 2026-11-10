import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c2ujidcvf.css';
import '../../css/e/eth0r9s2p.css';
import '../../css/l/lwkqk3b_i.css';
import '../../css/b/bqtcasd4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c2ujidcvf"/><path class="eth0r9s2p"/><path class="lwkqk3b_i"/><path class="bqtcasd4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:table-sparkle"} {...others} />);
}

export default Component;
