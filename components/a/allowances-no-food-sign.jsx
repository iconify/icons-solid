import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q29fx-bpn.css';
import '../../css/v/vbvn_pb8o.css';
import '../../css/n/nrwwj1bwn.css';
import '../../css/d/dl484by1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q29fx-bpn"/><path class="vbvn_pb8o"/><path class="nrwwj1bwn"/><path class="dl484by1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:allowances-no-food-sign"} {...others} />);
}

export default Component;
