import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxp5fobfl.css';
import '../../css/v/vmyq60mzw.css';
import '../../css/b/b44y7mbjl.css';
import '../../css/v/vxknocchf.css';
import '../../css/c/ce84a1bnw.css';
import '../../css/a/am-rhnb1o.css';
import '../../css/c/c7hrf4bkh.css';
import '../../css/j/jnj75yb2z.css';
import '../../css/r/rza4w3mqf.css';
import '../../css/c/cjgpamb6j.css';
import '../../css/v/vub0fcs_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k yxp5fobfl"/><path class="vmyq60mzw wm-k"/><path class="b44y7mbjl wm-k"/><path class="vxknocchf wm-k"/><path class="ce84a1bnw wm-shine"/><path class="am-rhnb1o wm-k"/><path class="c7hrf4bkh wm-a"/><path class="jnj75yb2z wm-s"/><path class="rza4w3mqf wm-s"/><path class="cjgpamb6j wm-s"/><path class="vub0fcs_r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:poinsettia"} {...others} />);
}

export default Component;
