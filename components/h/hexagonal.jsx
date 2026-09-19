import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/cpmnn2blj.css';
import '../../css/x/xdb_0hzms.css';
import '../../css/h/hn2-q2brc.css';
import '../../css/d/d2au89bgi.css';
import '../../css/e/e9ygeru3e.css';
import '../../css/a/apm48hbee.css';
import '../../css/v/v3v0ln4og.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="cpmnn2blj"/><path class="xdb_0hzms"/><path class="hn2-q2brc"/><path class="d2au89bgi"/><path class="e9ygeru3e"/><path class="apm48hbee"/><path class="v3v0ln4og"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hexagonal"} {...others} />);
}

export default Component;
