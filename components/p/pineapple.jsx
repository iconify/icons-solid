import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ekdkshbfq.css';
import '../../css/t/t7qivvb3u.css';
import '../../css/x/xie9uphgc.css';
import '../../css/d/db2s61rtk.css';
import '../../css/j/jp9jk4b_b.css';
import '../../css/i/irxqx9nwz.css';
import '../../css/z/zd0et8q1c.css';
import '../../css/c/csvmdfb9k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ekdkshbfq"/><path class="t7qivvb3u"/><path class="xie9uphgc"/><path class="db2s61rtk"/><path class="jp9jk4b_b"/><path class="irxqx9nwz"/><path class="zd0et8q1c"/><path class="csvmdfb9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pineapple"} {...others} />);
}

export default Component;
