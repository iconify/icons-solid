import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8a3t0u6e.css';
import '../../css/d/d8g82lb2s.css';
import '../../css/k/kbluudp0f.css';
import '../../css/d/d7807cbxv.css';
import '../../css/i/icj3p4bnr.css';
import '../../css/p/p4i72wbgz.css';
import '../../css/g/g4x19fb_t.css';
import '../../css/c/ctl1vhqvl.css';
import '../../css/u/ue_db4bwh.css';
import '../../css/y/yzwvd5bud.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z8a3t0u6e"/><path class="d8g82lb2s"/><path class="kbluudp0f"/><path class="d7807cbxv"/><path class="icj3p4bnr"/><path class="p4i72wbgz"/><path class="g4x19fb_t"/><path class="ctl1vhqvl"/><path class="ue_db4bwh"/><path class="yzwvd5bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:videogametrackarr"} {...others} />);
}

export default Component;
