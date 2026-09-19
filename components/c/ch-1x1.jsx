import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/m/mjdv0zb8x.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/n/n-qrszsjk.css';
import '../../css/k/k76lkxb4x.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="mjdv0zb8x"/><g class="n1mjunbsu"><path class="n-qrszsjk"/><path class="k76lkxb4x"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ch-1x1"} {...others} />);
}

export default Component;
