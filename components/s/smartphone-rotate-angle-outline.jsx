import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t0qbvbbpp.css';
import '../../css/p/ptivnxbln.css';
import '../../css/n/ni-v5m_ht.css';
import '../../css/x/xbiwgcb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t0qbvbbpp"/><path class="ptivnxbln"/><path class="ni-v5m_ht"/><path class="xbiwgcb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-angle-outline"} {...others} />);
}

export default Component;
