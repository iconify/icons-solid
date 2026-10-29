import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/d/d0c07lb1n.css';
import '../../css/w/wzz05rbau.css';
import '../../css/j/jr929vbvi.css';
import '../../css/s/sloj1fjmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="d0c07lb1n"/><path class="wzz05rbau"/><path class="jr929vbvi wm-shine"/><path class="sloj1fjmk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sidebar"} {...others} />);
}

export default Component;
