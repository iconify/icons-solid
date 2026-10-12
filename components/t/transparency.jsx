import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otjf8rboj.css';
import '../../css/h/h27vhbcct.css';
import '../../css/k/kpnvcyywc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="otjf8rboj"/><circle class="h27vhbcct"/><path class="kpnvcyywc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:transparency"} {...others} />);
}

export default Component;
