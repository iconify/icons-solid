import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lcb2wwwpz.css';
import '../../css/l/lv7htgbxr.css';
import '../../css/c/c6bzyqbke.css';
import '../../css/k/kl56jmaqc.css';
import '../../css/l/lu_jwkbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="lcb2wwwpz"/><path class="lv7htgbxr wm-shine"/><path class="c6bzyqbke wm-k"/><path class="kl56jmaqc wm-a"/><path class="lu_jwkbsc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:balloon"} {...others} />);
}

export default Component;
