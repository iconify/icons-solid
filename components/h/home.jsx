import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vd1boxbzz.css';
import '../../css/g/gkbvo0bna.css';
import '../../css/i/i1f5ipq7w.css';
import '../../css/k/ku4l5i70j.css';
import '../../css/r/rj4mzr9jm.css';
import '../../css/b/bx2-xs7ey.css';
import '../../css/p/poz7oqbtp.css';
import '../../css/p/pc5z0luzz.css';
import '../../css/z/zaezd5lkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vd1boxbzz"/><path class="gkbvo0bna"/><path class="i1f5ipq7w"/><path class="ku4l5i70j wm-shine"/><path class="rj4mzr9jm wm-k"/><path class="bx2-xs7ey wm-a"/><path class="poz7oqbtp"/><path class="pc5z0luzz"/><path class="wm-shine zaezd5lkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:home"} {...others} />);
}

export default Component;
