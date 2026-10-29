import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hbcxszb3z.css';
import '../../css/n/nr4l37b1c.css';
import '../../css/p/pezn3_bhe.css';
import '../../css/a/aa11gz0eb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hbcxszb3z"/><path class="nr4l37b1c wm-a"/><path class="pezn3_bhe wm-k"/><path class="aa11gz0eb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-concierge-sketch"} {...others} />);
}

export default Component;
