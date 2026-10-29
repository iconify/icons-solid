import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xmr-in37f.css';
import '../../css/z/zswzsrbrv.css';
import '../../css/h/hzwmdd9_j.css';
import '../../css/p/pqythin0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xmr-in37f"/><path class="wm-a zswzsrbrv"/><path class="hzwmdd9_j wm-k"/><path class="pqythin0z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:code-sketch"} {...others} />);
}

export default Component;
