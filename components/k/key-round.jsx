import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grpepvwsj.css';
import '../../css/p/pe0pidc-a.css';
import '../../css/t/tp2_9ue7j.css';
import '../../css/e/eyqm-4bjg.css';
import '../../css/i/ipng5ibuh.css';
import '../../css/z/z0ep14e9b.css';
import '../../css/d/d_tmifp-e.css';
import '../../css/w/wovcdzbbi.css';
import '../../css/m/mnt57ac2q.css';
import '../../css/i/i49ho-r4c.css';
import '../../css/m/myj4muyqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="grpepvwsj wm-shadow"/><path class="pe0pidc-a wm-k"/><path class="tp2_9ue7j wm-k"/><path class="eyqm-4bjg wm-k"/><path class="ipng5ibuh wm-k"/><path class="wm-shine z0ep14e9b"/><path class="d_tmifp-e wm-k"/><path class="wm-a wovcdzbbi"/><path class="mnt57ac2q wm-a"/><path class="i49ho-r4c wm-a"/><path class="myj4muyqf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:key-round"} {...others} />);
}

export default Component;
