import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xef-lsb9x.css';
import '../../css/r/rnn19t8kn.css';
import '../../css/b/bbqj_ib9r.css';
import '../../css/c/cxmghqd7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xef-lsb9x"/><path class="rnn19t8kn wm-a"/><path class="bbqj_ib9r wm-k"/><path class="cxmghqd7h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-down-to-line-sketch"} {...others} />);
}

export default Component;
