import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t7u_uqbzp.css';
import '../../css/q/q4dv6qklc.css';
import '../../css/u/usozbobia.css';
import '../../css/h/hr6436luy.css';
import '../../css/s/snhr-fvoo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t7u_uqbzp wm-k"/><path class="q4dv6qklc wm-a"/><path class="usozbobia wm-k"/><path class="hr6436luy wm-a"/><path class="snhr-fvoo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:snowman-sketch"} {...others} />);
}

export default Component;
