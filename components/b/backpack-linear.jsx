import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dxb0id5cf.css';
import '../../css/p/pzh9jhb6y.css';
import '../../css/a/a6lfmac3o.css';
import '../../css/v/v2s8-khye.css';
import '../../css/v/vn59_jbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dxb0id5cf"/><path class="pzh9jhb6y"/><path class="a6lfmac3o"/><path class="v2s8-khye"/><path class="vn59_jbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:backpack-linear"} {...others} />);
}

export default Component;
