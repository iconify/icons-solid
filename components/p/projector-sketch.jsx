import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gdzci1beo.css';
import '../../css/s/sd2p3fbaq.css';
import '../../css/h/h7iic-bcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gdzci1beo"/><path class="sd2p3fbaq wm-k"/><path class="h7iic-bcm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:projector-sketch"} {...others} />);
}

export default Component;
