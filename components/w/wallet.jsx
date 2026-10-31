import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l-7trrw_a.css';
import '../../css/m/mxrq7xb2v.css';
import '../../css/f/fzdgvcbvs.css';
import '../../css/i/i58-2pbvv.css';
import '../../css/k/kbxro98gm.css';
import '../../css/j/jjk1pqb4m.css';
import '../../css/d/dqqa44iyb.css';
import '../../css/f/f9l_10bog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="l-7trrw_a"/><path class="mxrq7xb2v"/><path class="fzdgvcbvs wm-shine"/><path class="i58-2pbvv wm-k"/><path class="kbxro98gm wm-a"/><path class="jjk1pqb4m"/><path class="dqqa44iyb"/><path class="f9l_10bog wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:wallet"} {...others} />);
}

export default Component;
