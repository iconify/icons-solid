import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agkjp5bec.css';
import '../../css/c/chhgf-xbk.css';
import '../../css/w/w_4htojmi.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="agkjp5bec"/><path clip-rule="evenodd" class="chhgf-xbk"/><path clip-rule="evenodd" class="w_4htojmi"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:hourglass-off"} {...others} />);
}

export default Component;
