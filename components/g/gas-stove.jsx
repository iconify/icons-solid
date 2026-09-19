import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t8e-pkcgt.css';
import '../../css/t/t6qagibeg.css';
import '../../css/x/xvj31lbcb.css';
import '../../css/p/p12apbc6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="t8e-pkcgt"/><path class="t6qagibeg"/><path class="xvj31lbcb"/><path class="p12apbc6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gas-stove"} {...others} />);
}

export default Component;
