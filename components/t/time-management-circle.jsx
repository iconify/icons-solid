import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tftwdrbwv.css';
import '../../css/m/mcue2tcqv.css';
import '../../css/o/ot1i2cc-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tftwdrbwv"/><path class="mcue2tcqv"/><path class="ot1i2cc-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:time-management-circle"} {...others} />);
}

export default Component;
