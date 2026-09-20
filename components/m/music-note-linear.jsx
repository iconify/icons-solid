import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lvnegepox.css';
import '../../css/n/n6e0xbyjd.css';
import '../../css/s/so9syjbwr.css';
import '../../css/e/eek4bo4aq.css';
import '../../css/q/q1io4jbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lvnegepox"/><path class="n6e0xbyjd"/><path class="so9syjbwr"/><path class="eek4bo4aq"/><path class="q1io4jbwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-linear"} {...others} />);
}

export default Component;
