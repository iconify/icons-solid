import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fxdt5dbsr.css';
import '../../css/v/v-si7zbpn.css';
import '../../css/e/evmxz44ir.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fxdt5dbsr"/><path class="v-si7zbpn"/><path class="evmxz44ir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:intestine-outline"} {...others} />);
}

export default Component;
