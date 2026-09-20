import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/n/nde522b_j.css';
import '../../css/m/mqx6s1bdl.css';
import '../../css/d/d8kbcbc-x.css';
import '../../css/a/ad35ldbxn.css';
import '../../css/q/q6e7u0ips.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wj4kgr0on"><path class="nde522b_j"/><path class="mqx6s1bdl"/><path class="d8kbcbc-x"/><path class="ad35ldbxn"/><path class="q6e7u0ips"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:aroace"} {...others} />);
}

export default Component;
