import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ibm9srp6n.css';
import '../../css/m/mnkn6ibxr.css';
import '../../css/u/ukl0y6blj.css';
import '../../css/t/t-u8hzbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ibm9srp6n"/><path class="mnkn6ibxr wm-k"/><path class="ukl0y6blj wm-a"/><path class="t-u8hzbyc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cauldron-sketch"} {...others} />);
}

export default Component;
