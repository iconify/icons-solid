import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w4cznxjwh.css';
import '../../css/i/irbpncu7y.css';
import '../../css/b/be5nhjdal.css';
import '../../css/p/pcqn0-bgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w4cznxjwh wm-k"/><path class="irbpncu7y wm-a"/><path class="be5nhjdal wm-k"/><path class="pcqn0-bgs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:euro-sketch"} {...others} />);
}

export default Component;
