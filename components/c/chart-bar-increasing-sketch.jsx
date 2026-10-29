import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cur66cgez.css';
import '../../css/j/jlz57qpcn.css';
import '../../css/s/spe3eibot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cur66cgez wm-a"/><path class="jlz57qpcn wm-k"/><path class="spe3eibot wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-bar-increasing-sketch"} {...others} />);
}

export default Component;
