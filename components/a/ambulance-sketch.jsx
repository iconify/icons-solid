import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kqtbwreef.css';
import '../../css/y/y5ibkwb3c.css';
import '../../css/i/ixkdbb2ly.css';
import '../../css/p/p5j8ju-6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kqtbwreef"/><path class="wm-a y5ibkwb3c"/><path class="ixkdbb2ly wm-k"/><path class="p5j8ju-6f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ambulance-sketch"} {...others} />);
}

export default Component;
