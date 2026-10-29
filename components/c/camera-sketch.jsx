import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gh8cru6va.css';
import '../../css/p/phhcb1buc.css';
import '../../css/x/xmz6v6vvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gh8cru6va"/><path class="phhcb1buc wm-k"/><path class="wm-a xmz6v6vvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:camera-sketch"} {...others} />);
}

export default Component;
