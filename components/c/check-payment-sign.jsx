import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cyyqt0pzv.css';
import '../../css/s/shua_zbkq.css';
import '../../css/x/xp50n6b6u.css';
import '../../css/t/t03j23bmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cyyqt0pzv"/><path class="shua_zbkq"/><path class="xp50n6b6u"/><path class="t03j23bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:check-payment-sign"} {...others} />);
}

export default Component;
