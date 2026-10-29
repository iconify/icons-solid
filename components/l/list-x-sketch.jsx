import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/unyxg6bnj.css';
import '../../css/o/o5gwckbir.css';
import '../../css/x/xknnqlb9b.css';
import '../../css/h/hi-3gxb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="unyxg6bnj wm-k"/><path class="o5gwckbir wm-s"/><path class="wm-k xknnqlb9b"/><path class="hi-3gxb_k wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-x-sketch"} {...others} />);
}

export default Component;
