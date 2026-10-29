import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mpj-i-bct.css';
import '../../css/m/mu8a_pbcy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mpj-i-bct"/><path class="mu8a_pbcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pause-sketch"} {...others} />);
}

export default Component;
