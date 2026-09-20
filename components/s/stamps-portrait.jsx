import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h3mu86_sr.css';
import '../../css/c/c1t0jxbrv.css';
import '../../css/p/prste7bpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h3mu86_sr"/><path class="c1t0jxbrv"/><path class="prste7bpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:stamps-portrait"} {...others} />);
}

export default Component;
