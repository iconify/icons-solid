import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-f_d0bbt.css';
import '../../css/s/svgorbccz.css';
import '../../css/k/k9onqybkt.css';
import '../../css/f/flfb2lbri.css';
import '../../css/s/s-h5cgcds.css';
import '../../css/j/jglxop5au.css';
import '../../css/u/ugweftb9u.css';
import '../../css/c/coc7rpbki.css';
import '../../css/i/igybdhbct.css';
import '../../css/s/sz8dv7whq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d-f_d0bbt wm-k"/><path class="svgorbccz wm-a"/><path class="k9onqybkt wm-s"/><path class="flfb2lbri wm-deco"/><path class="s-h5cgcds wm-k"/><path class="jglxop5au wm-a"/><path class="ugweftb9u wm-s"/><path class="coc7rpbki wm-shadow"/><path class="igybdhbct wm-shine"/><path class="sz8dv7whq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:sunset"} {...others} />);
}

export default Component;
