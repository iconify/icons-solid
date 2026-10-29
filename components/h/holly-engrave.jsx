import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w72h1h5zq.css';
import '../../css/h/hf2cx4ppo.css';
import '../../css/n/n37qylb6g.css';
import '../../css/l/lh_y89hot.css';
import '../../css/t/tjlpedbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w72h1h5zq wm-k"/><path class="hf2cx4ppo wm-a"/><path class="n37qylb6g wm-shadow"/><path class="lh_y89hot wm-k"/><path class="tjlpedbiu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:holly-engrave"} {...others} />);
}

export default Component;
