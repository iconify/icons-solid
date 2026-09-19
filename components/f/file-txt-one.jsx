import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/t/th58v930t.css';
import '../../css/e/ey3gjjbow.css';
import '../../css/q/qxdje_4wm.css';
import '../../css/p/p-570-pmk.css';
import '../../css/c/cwzlrubce.css';
import '../../css/v/vvurhmsfi.css';
import '../../css/n/nxcj-wbtv.css';
import '../../css/q/q0rik3ksv.css';
import '../../css/d/dzzbhcdtx.css';
import '../../css/y/y_5bcx0md.css';
import '../../css/w/w7eq7lbdu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="th58v930t"/><path class="ey3gjjbow"/><path class="qxdje_4wm"/><path class="p-570-pmk"/><rect class="cwzlrubce"/><path class="vvurhmsfi"/><path class="nxcj-wbtv"/><path class="q0rik3ksv"/><path class="dzzbhcdtx"/><path class="y_5bcx0md"/><path class="w7eq7lbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-txt-one"} {...others} />);
}

export default Component;
