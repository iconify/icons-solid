import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aerk3sbog.css';
import '../../css/k/kjec_i-xm.css';
import '../../css/b/bkaybsb9q.css';
import '../../css/k/kx36_kbvm.css';
import '../../css/z/z-wr12dvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="aerk3sbog wm-k"/><path class="kjec_i-xm wm-k"/><path class="bkaybsb9q wm-k"/><path class="kx36_kbvm wm-k"/><path class="wm-k z-wr12dvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-sketch"} {...others} />);
}

export default Component;
