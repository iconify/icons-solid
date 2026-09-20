import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxs5opefl.css';
import '../../css/p/p35oimbbv.css';
import '../../css/q/qrk41hb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cxs5opefl"/><path class="p35oimbbv"/><path class="qrk41hb3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:to-pip-bold-duotone"} {...others} />);
}

export default Component;
