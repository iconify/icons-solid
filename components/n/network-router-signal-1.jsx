import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i8946bmpw.css';
import '../../css/w/wn5nyu97n.css';
import '../../css/k/k-vh-k0_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i8946bmpw"/><path class="wn5nyu97n"/><path class="k-vh-k0_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:network-router-signal-1"} {...others} />);
}

export default Component;
