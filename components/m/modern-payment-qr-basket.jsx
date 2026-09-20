import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mvd1m8bez.css';
import '../../css/q/qjykfwbex.css';
import '../../css/n/npm16tm7n.css';
import '../../css/n/nsefvcihq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mvd1m8bez"/><path class="qjykfwbex"/><path class="npm16tm7n"/><path class="nsefvcihq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:modern-payment-qr-basket"} {...others} />);
}

export default Component;
