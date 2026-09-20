import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu9f8vi9c.css';
import '../../css/u/uurr_u0jq.css';
import '../../css/r/rsca68b0t.css';
import '../../css/u/uyd6dkbpy.css';
import '../../css/t/tei5kjbwh.css';
import '../../css/h/hxo44vb8n.css';
import '../../css/j/jr5nhcc1x.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/c/c71t0eb-r.css';
import '../../css/a/as4g_qboz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yu9f8vi9c"/><path class="uurr_u0jq"/><path class="rsca68b0t"/><path class="uyd6dkbpy"/><path class="tei5kjbwh"/><path class="hxo44vb8n"/><path class="jr5nhcc1x"/><g class="jn8qy4bru"><path class="c71t0eb-r"/><path class="as4g_qboz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:toilet"} {...others} />);
}

export default Component;
