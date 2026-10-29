import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja19qbcmd.css';
import '../../css/w/waeqvwbax.css';
import '../../css/q/qujbgg6sl.css';
import '../../css/t/tlo-jjbpp.css';
import '../../css/r/rcaxmbcrr.css';
import '../../css/k/krk3ucb9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ja19qbcmd wm-k"/><path class="waeqvwbax wm-k"/><path class="qujbgg6sl wm-k"/><path class="tlo-jjbpp wm-k"/><path class="rcaxmbcrr wm-shine"/><path class="krk3ucb9b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:folder-x"} {...others} />);
}

export default Component;
