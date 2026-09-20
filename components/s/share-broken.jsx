import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wjw99lb2m.css';
import '../../css/n/nk62zxbpn.css';
import '../../css/a/amsssrbtq.css';
import '../../css/i/it0o6lbdj.css';
import '../../css/o/olbluib9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wjw99lb2m"/><path class="nk62zxbpn"/><path class="amsssrbtq"/><path class="it0o6lbdj"/><path class="olbluib9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:share-broken"} {...others} />);
}

export default Component;
