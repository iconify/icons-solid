import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfiw-el-b.css';
import '../../css/z/zcjcazp3s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="nfiw-el-b"/><path clip-rule="evenodd" class="zcjcazp3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:body-mass-index"} {...others} />);
}

export default Component;
