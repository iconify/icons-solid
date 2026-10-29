import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-mo6l4er.css';
import '../../css/w/w2kaknzsg.css';
import '../../css/v/vb2a6ubrq.css';
import '../../css/w/wi4t5hb_w.css';
import '../../css/j/jcddbzbvz.css';
import '../../css/e/exe3wmjfe.css';
import '../../css/h/hl_d-2byl.css';
import '../../css/x/x0utzdb-h.css';
import '../../css/y/yeju3sgwb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow y-mo6l4er"/><path class="w2kaknzsg wm-k"/><path class="vb2a6ubrq wm-k"/><path class="wi4t5hb_w wm-k"/><path class="jcddbzbvz wm-k"/><path class="exe3wmjfe wm-k"/><path class="hl_d-2byl wm-shine"/><path class="wm-k x0utzdb-h"/><path class="wm-a yeju3sgwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:soup"} {...others} />);
}

export default Component;
