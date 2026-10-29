import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3gkpbbqb.css';
import '../../css/k/k74tf4blx.css';
import '../../css/u/u641ei6rn.css';
import '../../css/v/vfjhrab0p.css';
import '../../css/z/zd_9skniz.css';
import '../../css/e/eds2nn52w.css';
import '../../css/y/yh936mhbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3gkpbbqb wm-shadow"/><path class="k74tf4blx wm-a"/><path class="u641ei6rn wm-k"/><path class="vfjhrab0p wm-k"/><path class="wm-k zd_9skniz"/><path class="eds2nn52w wm-k"/><path class="wm-shine yh936mhbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:wheat"} {...others} />);
}

export default Component;
