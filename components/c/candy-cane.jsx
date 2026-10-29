import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/glhb5bbmp.css';
import '../../css/n/nkbt2_byc.css';
import '../../css/n/nxs9evbut.css';
import '../../css/a/acoeud07z.css';
import '../../css/d/ddupfj10w.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="glhb5bbmp wm-shadow"/><path class="nkbt2_byc"/><path class="nxs9evbut"/><path class="acoeud07z"/><path class="ddupfj10w wm-shine"/><path class="usyb2xbzn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:candy-cane"} {...others} />);
}

export default Component;
