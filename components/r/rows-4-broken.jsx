import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsllhdbpu.css';
import '../../css/n/nye_uubrn.css';
import '../../css/w/wip28lbxr.css';
import '../../css/j/jtpwddb9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rsllhdbpu"/><path class="nye_uubrn"/><path class="wip28lbxr"/><path class="jtpwddb9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rows-4-broken"} {...others} />);
}

export default Component;
