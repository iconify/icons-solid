import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yyptcnxel.css';
import '../../css/w/w4l--qbhc.css';
import '../../css/u/ut33svvhu.css';
import '../../css/c/c_rt07bxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yyptcnxel"/><path class="w4l--qbhc"/><path class="ut33svvhu"/><path class="c_rt07bxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cash-payment-sign-2"} {...others} />);
}

export default Component;
