import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l5-jdrb9g.css';
import '../../css/p/px2ih4q2e.css';
import '../../css/z/zyn4aw2jw.css';
import '../../css/y/yqz_2re-h.css';
import '../../css/u/uo1xsbb6o.css';
import '../../css/x/xxbokhbhh.css';
import '../../css/n/ng9-c4b_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l5-jdrb9g wm-k"/><path class="px2ih4q2e wm-a"/><path class="wm-shadow zyn4aw2jw"/><path class="wm-k yqz_2re-h"/><path class="uo1xsbb6o wm-k"/><path class="wm-a xxbokhbhh"/><path class="ng9-c4b_d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:coins-engrave"} {...others} />);
}

export default Component;
