import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uhthibbqc.css';
import '../../css/v/vrcdcnbpw.css';
import '../../css/s/s-916eebg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="uhthibbqc"/><path class="vrcdcnbpw wm-k"/><path class="s-916eebg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:rose-bouquet"} {...others} />);
}

export default Component;
