import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pj3sp_yui.css';
import '../../css/t/tawvvybgt.css';
import '../../css/h/hd5mo2bvy.css';
import '../../css/h/h7cdq_91p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pj3sp_yui"/><path class="tawvvybgt wm-k"/><path class="hd5mo2bvy wm-k"/><path class="h7cdq_91p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:door-closed-sketch"} {...others} />);
}

export default Component;
