import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vb0__2bbm.css';
import '../../css/q/qlyu1pwmp.css';
import '../../css/p/pg9_vdbco.css';
import '../../css/h/hbf5g_b1s.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vb0__2bbm"/><path class="qlyu1pwmp wm-shine"/><path class="pg9_vdbco wm-k"/><path class="hbf5g_b1s wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:share-2"} {...others} />);
}

export default Component;
