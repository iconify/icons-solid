import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/o/or-j6_o7q.css';
import '../../css/h/hr-k76ban.css';
import '../../css/c/cw084zpui.css';
import '../../css/f/f7u3dibgp.css';
import '../../css/p/pcei7zlii.css';
import '../../css/w/wdu5jkzss.css';
import '../../css/a/atpmvdnxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><path class="or-j6_o7q wm-k"/><path class="hr-k76ban wm-shadow"/><path class="cw084zpui wm-k"/><path class="f7u3dibgp wm-k"/><path class="pcei7zlii wm-k"/><path class="wdu5jkzss wm-k"/><path class="atpmvdnxt wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:firecracker-string"} {...others} />);
}

export default Component;
