import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3307tvyz.css';
import '../../css/m/moiam8ufc.css';
import '../../css/o/ox9d4xb-r.css';
import '../../css/q/qmq6jwbvn.css';
import '../../css/l/l1kemhbsc.css';
import '../../css/z/ztcv70bpv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w3307tvyz"/><circle class="moiam8ufc"/><path class="ox9d4xb-r"/><path class="qmq6jwbvn"/><path class="l1kemhbsc"/><circle class="ztcv70bpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:capacitarr-light"} {...others} />);
}

export default Component;
