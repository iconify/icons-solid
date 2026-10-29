import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjnderb7f.css';
import '../../css/f/fx855jbgx.css';
import '../../css/e/eku-axnin.css';
import '../../css/g/gclb38h7v.css';
import '../../css/s/ssy81tblw.css';
import '../../css/j/jn3iaomba.css';
import '../../css/i/ifcufxb7c.css';
import '../../css/o/o2rfk3bpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjnderb7f wm-shadow"/><path class="fx855jbgx wm-k"/><path class="eku-axnin wm-k"/><path class="gclb38h7v wm-k"/><path class="ssy81tblw wm-k"/><path class="jn3iaomba wm-shine"/><path class="ifcufxb7c wm-k"/><path class="o2rfk3bpn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:book-marked"} {...others} />);
}

export default Component;
