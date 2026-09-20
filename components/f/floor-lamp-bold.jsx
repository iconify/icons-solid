import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tuxhiac2m.css';
import '../../css/d/d_m6wbodv.css';
import '../../css/w/w7dhx-bnv.css';
import '../../css/h/hk65pub_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tuxhiac2m"/><path class="d_m6wbodv"/><path class="w7dhx-bnv"/><path class="hk65pub_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-bold"} {...others} />);
}

export default Component;
