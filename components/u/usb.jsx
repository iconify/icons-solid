import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr481xbin.css';
import '../../css/o/o-97eguav.css';
import '../../css/w/wffs0hvdb.css';
import '../../css/d/dazldabos.css';
import '../../css/g/gz8zsl52i.css';
import '../../css/f/f_c2l4bzz.css';
import '../../css/z/zf4j7p4kc.css';
import '../../css/h/hwwyaacvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nr481xbin wm-shadow"/><path class="o-97eguav wm-k"/><path class="wffs0hvdb wm-k"/><path class="dazldabos wm-k"/><path class="gz8zsl52i wm-k"/><path class="f_c2l4bzz wm-k"/><path class="wm-k zf4j7p4kc"/><path class="hwwyaacvm wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:usb"} {...others} />);
}

export default Component;
