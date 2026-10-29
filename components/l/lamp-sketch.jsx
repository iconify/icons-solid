import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lwz7j4b-a.css';
import '../../css/d/dv0pewh6k.css';
import '../../css/n/n-ttdbbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lwz7j4b-a wm-deco"/><path class="dv0pewh6k wm-k"/><path class="n-ttdbbjs wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lamp-sketch"} {...others} />);
}

export default Component;
