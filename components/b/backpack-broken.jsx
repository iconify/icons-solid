import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d76br_vtg.css';
import '../../css/p/pzh9jhb6y.css';
import '../../css/a/a6lfmac3o.css';
import '../../css/h/h8wqmtb6z.css';
import '../../css/v/vn59_jbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d76br_vtg"/><path class="pzh9jhb6y"/><path class="a6lfmac3o"/><path class="h8wqmtb6z"/><path class="vn59_jbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:backpack-broken"} {...others} />);
}

export default Component;
