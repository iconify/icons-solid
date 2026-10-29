import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/plj316b_z.css';
import '../../css/w/ws2q6rb-j.css';
import '../../css/o/o8h_injxf.css';
import '../../css/w/wus4ivb-r.css';
import '../../css/i/itx-qfngc.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="plj316b_z wm-shadow"/><path class="ws2q6rb-j"/><path class="o8h_injxf"/><path class="wus4ivb-r"/><path class="itx-qfngc wm-shine"/><path class="usyb2xbzn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:euro"} {...others} />);
}

export default Component;
