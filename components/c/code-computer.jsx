import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kd7b5hxbq.css';
import '../../css/r/rgpfwjbgz.css';
import '../../css/k/kdc0jmbbr.css';
import '../../css/y/yw489_uiw.css';
import '../../css/p/p8o016kgn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="kd7b5hxbq"/><path class="rgpfwjbgz"/><path class="kdc0jmbbr"/><path class="yw489_uiw"/><path class="p8o016kgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:code-computer"} {...others} />);
}

export default Component;
