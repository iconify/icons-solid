import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mbx10rpve.css';
import '../../css/d/d5ia9zarv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mbx10rpve"/><path class="d5ia9zarv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-sketch"} {...others} />);
}

export default Component;
