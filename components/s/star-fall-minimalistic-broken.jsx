import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/coem9qbye.css';
import '../../css/h/ht-0wdb4o.css';
import '../../css/q/qoddae6qt.css';
import '../../css/f/fogwhsbru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="coem9qbye"/><path class="ht-0wdb4o"/><path class="qoddae6qt"/><path class="fogwhsbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-minimalistic-broken"} {...others} />);
}

export default Component;
