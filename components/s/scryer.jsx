import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrzr42b0l.css';
import '../../css/m/m51ryczuj.css';
import '../../css/m/myrgjwb7s.css';
import '../../css/v/vbvk0bcmi.css';
import '../../css/k/k2fayyj6c.css';
import '../../css/c/c_t_fcbyk.css';
import '../../css/z/z_cabt9cv.css';
import '../../css/p/pf_tltbbt.css';
import '../../css/x/xxwrdbbsy.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGMFr9Ydob" x1="48.6" x2="463.8" y1="140.8" y2="379.9" gradientUnits="userSpaceOnUse"><stop offset=".49" class="rrzr42b0l"/><stop offset=".74" class="m51ryczuj"/></linearGradient><path fill="url(#SVGMFr9Ydob)" class="myrgjwb7s"/><circle class="vbvk0bcmi"/><linearGradient id="SVGShWnLdkb" x1="188.5" x2="323.4" y1="260" y2="260" gradientUnits="userSpaceOnUse"><stop offset="0" class="k2fayyj6c"/><stop offset="1" class="c_t_fcbyk"/></linearGradient><circle fill="url(#SVGShWnLdkb)" class="z_cabt9cv"/><circle class="pf_tltbbt"/><path class="xxwrdbbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scryer"} {...others} />);
}

export default Component;
