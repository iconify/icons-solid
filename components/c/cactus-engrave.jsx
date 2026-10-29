import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fuy23-brh.css';
import '../../css/i/irtzjc7wf.css';
import '../../css/v/vbtrpvbhv.css';
import '../../css/u/ukna4qm-o.css';
import '../../css/j/jzul1pbjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fuy23-brh wm-k"/><path class="irtzjc7wf wm-a"/><path class="vbtrpvbhv wm-shadow"/><path class="ukna4qm-o wm-k"/><path class="jzul1pbjt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cactus-engrave"} {...others} />);
}

export default Component;
