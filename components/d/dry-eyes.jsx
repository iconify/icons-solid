import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z7u4p4bhx.css';
import '../../css/x/xgmfg45qx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="z7u4p4bhx"/><path clip-rule="evenodd" class="xgmfg45qx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:dry-eyes"} {...others} />);
}

export default Component;
