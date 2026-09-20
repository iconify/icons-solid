import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x6el6pbcn.css';
import '../../css/l/l0jkubb8s.css';
import '../../css/q/qmb_m_bid.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path clip-rule="evenodd" class="x6el6pbcn"/><path clip-rule="evenodd" class="l0jkubb8s"/><path class="qmb_m_bid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:voice-scan-1"} {...others} />);
}

export default Component;
