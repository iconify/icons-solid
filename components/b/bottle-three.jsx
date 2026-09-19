import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/old_7oj4c.css';
import '../../css/l/lb_svwuwq.css';
import '../../css/w/w--x1k88b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="old_7oj4c"/><rect class="lb_svwuwq"/><rect class="w--x1k88b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bottle-three"} {...others} />);
}

export default Component;
