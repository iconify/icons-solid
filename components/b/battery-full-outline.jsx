import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzibxeopw.css';
import '../../css/i/iqne-jbsz.css';
import '../../css/f/f2q_loiay.css';
import '../../css/n/n2noceb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qzibxeopw"/><path class="iqne-jbsz"/><path class="f2q_loiay"/><path clip-rule="evenodd" class="n2noceb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-full-outline"} {...others} />);
}

export default Component;
