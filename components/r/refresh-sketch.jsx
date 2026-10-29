import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xyj51-3yi.css';
import '../../css/u/uwvegzi1z.css';
import '../../css/s/shsa3e98e.css';
import '../../css/k/kgcxnxbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xyj51-3yi"/><path class="uwvegzi1z wm-a"/><path class="shsa3e98e wm-k"/><path class="kgcxnxbyj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:refresh-sketch"} {...others} />);
}

export default Component;
