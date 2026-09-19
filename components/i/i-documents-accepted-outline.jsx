import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yyy571bav.css';
import '../../css/m/mlcmwpbbf.css';
import '../../css/l/l28zvvb-b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="yyy571bav"/><path clip-rule="evenodd" class="mlcmwpbbf"/><path class="l28zvvb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-documents-accepted-outline"} {...others} />);
}

export default Component;
