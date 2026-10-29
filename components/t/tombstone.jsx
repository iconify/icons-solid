import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qhgdzvbov.css';
import '../../css/s/s7_n84btt.css';
import '../../css/l/l077v9bli.css';
import '../../css/v/vr0ousahq.css';
import '../../css/v/vwiaa3b1t.css';
import '../../css/o/oloh20b8j.css';
import '../../css/p/p7tnq8qxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qhgdzvbov wm-shadow"/><path class="s7_n84btt"/><path class="l077v9bli"/><path class="vr0ousahq"/><path class="vwiaa3b1t"/><path class="oloh20b8j wm-shine"/><path class="p7tnq8qxl wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:tombstone"} {...others} />);
}

export default Component;
