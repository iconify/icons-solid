import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/if_w8upnf.css';
import '../../css/b/bqhqz_9_r.css';
import '../../css/i/i-n87fqqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="if_w8upnf"/><path class="bqhqz_9_r"/><path class="i-n87fqqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:walking-round-broken"} {...others} />);
}

export default Component;
