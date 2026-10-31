import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tokuyfbgs.css';
import '../../css/k/kyz2ti7lw.css';
import '../../css/c/c2tr2qbfa.css';
import '../../css/t/t6xqh4k_o.css';
import '../../css/x/xbhy35y8l.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="tokuyfbgs"/><path class="kyz2ti7lw"/><path class="c2tr2qbfa"/><path class="t6xqh4k_o"/><path class="xbhy35y8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gy"} {...others} />);
}

export default Component;
