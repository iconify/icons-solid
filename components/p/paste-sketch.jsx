import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/utejzabus.css';
import '../../css/q/q8dj_4b9d.css';
import '../../css/i/i9kv_6bto.css';
import '../../css/d/dowp58bga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="utejzabus"/><path class="q8dj_4b9d wm-k"/><path class="i9kv_6bto wm-k"/><path class="dowp58bga wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paste-sketch"} {...others} />);
}

export default Component;
