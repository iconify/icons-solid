import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hj_0v-x_x.css';
import '../../css/y/y6n7t0e6l.css';
import '../../css/y/y-zlk6bab.css';
import '../../css/z/z60dfsb9q.css';
import '../../css/y/yrtbu4sby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hj_0v-x_x"/><path class="wm-k y6n7t0e6l"/><path class="wm-k y-zlk6bab"/><path class="wm-a z60dfsb9q"/><path class="wm-a yrtbu4sby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:skip-back-sketch"} {...others} />);
}

export default Component;
