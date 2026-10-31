import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/s/s_5m5o48u.css';
import '../../css/v/v37hgj6_q.css';
import '../../css/r/rrl32abvs.css';
import '../../css/a/aer6wibxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><path class="s_5m5o48u wm-shadow"/><path class="v37hgj6_q wm-k"/><path class="rrl32abvs wm-k"/><path class="aer6wibxa wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:candy-cane"} {...others} />);
}

export default Component;
