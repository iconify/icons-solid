import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m28xlfe0s.css';
import '../../css/n/n4z9ekl9b.css';
import '../../css/r/rz5bu77ia.css';
import '../../css/o/o0u9mkbtp.css';
import '../../css/x/xx8ry-y9g.css';
import '../../css/l/lnlqewdku.css';
import '../../css/m/m70hjzb8j.css';
import '../../css/p/pcmcwp4sm.css';
import '../../css/t/tqz3xcb-h.css';
import '../../css/z/zjme-y4_x.css';
import '../../css/k/k4_j6iiqf.css';
import '../../css/h/h6-t4mbqr.css';
import '../../css/i/ih8h66b2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m28xlfe0s wm-shadow"/><path class="n4z9ekl9b wm-k"/><path class="rz5bu77ia wm-k"/><path class="o0u9mkbtp wm-k"/><path class="wm-k xx8ry-y9g"/><path class="lnlqewdku wm-shine"/><path class="m70hjzb8j wm-k"/><path class="pcmcwp4sm wm-a"/><path class="tqz3xcb-h wm-a"/><path class="wm-a zjme-y4_x"/><path class="k4_j6iiqf wm-a"/><path class="h6-t4mbqr wm-a"/><path class="ih8h66b2q wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:text-cursor"} {...others} />);
}

export default Component;
