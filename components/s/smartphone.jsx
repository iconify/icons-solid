import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rt1pbz0-u.css';
import '../../css/v/vilp18_8i.css';
import '../../css/s/s2z0nkpeu.css';
import '../../css/u/u43dmrbkm.css';
import '../../css/z/zzgumwbxx.css';
import '../../css/h/hkcj5-bst.css';
import '../../css/r/rbb5emvcs.css';
import '../../css/t/tqt82rqub.css';
import '../../css/w/w5vo7mpor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="rt1pbz0-u"/><path class="vilp18_8i"/><path class="s2z0nkpeu"/><path class="u43dmrbkm wm-shine"/><path class="wm-k zzgumwbxx"/><path class="hkcj5-bst wm-a"/><path class="rbb5emvcs"/><path class="tqt82rqub"/><path class="w5vo7mpor wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:smartphone"} {...others} />);
}

export default Component;
