import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyk4fh25a.css';
import '../../css/q/qp6-zqb_y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="cyk4fh25a"/><path clip-rule="evenodd" class="qp6-zqb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ui-zoom-out"} {...others} />);
}

export default Component;
