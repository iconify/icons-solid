import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eab5obbwx.css';
import '../../css/s/s0a204b1r.css';
import '../../css/y/ysas-lb9p.css';
import '../../css/l/le_23rbrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="eab5obbwx"/><path class="s0a204b1r wm-k"/><path class="wm-k ysas-lb9p"/><path class="le_23rbrp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spy-sketch"} {...others} />);
}

export default Component;
