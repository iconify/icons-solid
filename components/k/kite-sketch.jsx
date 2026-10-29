import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/ktsqa0bws.css';
import '../../css/s/s7h2y0q0a.css';
import '../../css/m/m8c17dbye.css';
import '../../css/b/b3vngc7zm.css';
import '../../css/n/nmxgsn0rr.css';
import '../../css/o/oq-j9cc4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ktsqa0bws"/><path class="s7h2y0q0a wm-k"/><path class="m8c17dbye wm-s"/><path class="b3vngc7zm wm-k"/><path class="nmxgsn0rr wm-a"/><path class="oq-j9cc4h wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:kite-sketch"} {...others} />);
}

export default Component;
