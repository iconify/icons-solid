import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7xt40b-m.css';
import '../../css/m/ms8y08bns.css';
import '../../css/x/xxt8oxbcp.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t7xt40b-m"/><path clip-rule="evenodd" class="ms8y08bns"/><path clip-rule="evenodd" class="xxt8oxbcp"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:code-off"} {...others} />);
}

export default Component;
