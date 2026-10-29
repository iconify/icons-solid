import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l9khuwb9i.css';
import '../../css/n/njptybbfv.css';
import '../../css/n/nqru_n_7g.css';
import '../../css/q/qy7-phkvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l9khuwb9i"/><path class="njptybbfv wm-k"/><path class="nqru_n_7g wm-k"/><path class="qy7-phkvw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layout-list-sketch"} {...others} />);
}

export default Component;
