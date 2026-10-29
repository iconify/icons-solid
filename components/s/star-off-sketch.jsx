import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mmqlpiqfo.css';
import '../../css/m/memzlwbyy.css';
import '../../css/b/bvwl46b5l.css';
import '../../css/w/wx0gwswyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mmqlpiqfo wm-k"/><path class="memzlwbyy wm-s"/><path class="bvwl46b5l wm-k"/><path class="wm-s wx0gwswyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:star-off-sketch"} {...others} />);
}

export default Component;
