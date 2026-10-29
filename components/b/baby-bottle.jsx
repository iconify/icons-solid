import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bqg7920ma.css';
import '../../css/l/luq_h_b-t.css';
import '../../css/q/q6ge92bhq.css';
import '../../css/e/ekaje5j5k.css';
import '../../css/a/aobkz2tal.css';
import '../../css/r/rqap9ibud.css';
import '../../css/x/x2q3hsw-r.css';
import '../../css/j/jepqtsbqt.css';
import '../../css/b/byb78te6k.css';
import '../../css/t/tcmebojsz.css';
import '../../css/a/asast1bss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bqg7920ma wm-shadow"/><path class="luq_h_b-t wm-shadow"/><path class="q6ge92bhq"/><path class="ekaje5j5k"/><path class="aobkz2tal"/><path class="rqap9ibud"/><path class="wm-shine x2q3hsw-r"/><path class="jepqtsbqt wm-shine"/><path class="byb78te6k"/><path class="tcmebojsz"/><path class="asast1bss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:baby-bottle"} {...others} />);
}

export default Component;
