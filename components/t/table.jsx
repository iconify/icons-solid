import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qavduj6ck.css';
import '../../css/m/m_n0p657a.css';
import '../../css/i/ijw-rsbgs.css';
import '../../css/r/rsx81sz7v.css';
import '../../css/b/bj82bmoxi.css';
import '../../css/d/dun-hnbdj.css';
import '../../css/o/obbyccnwj.css';
import '../../css/w/wh-5kxbte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qavduj6ck wm-k"/><path class="m_n0p657a wm-k"/><path class="ijw-rsbgs wm-k"/><path class="rsx81sz7v wm-k"/><path class="bj82bmoxi wm-k"/><path class="dun-hnbdj wm-k"/><path class="obbyccnwj wm-shine"/><path class="wh-5kxbte wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:table"} {...others} />);
}

export default Component;
