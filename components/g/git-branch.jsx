import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fmkz-46hi.css';
import '../../css/p/pj0_m3bma.css';
import '../../css/r/rcbgasbpl.css';
import '../../css/e/ejp8hlmyz.css';
import '../../css/t/tfzq4cbxe.css';
import '../../css/k/k486vpbuq.css';
import '../../css/r/rz_c_3bau.css';
import '../../css/l/l3yk_bcii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fmkz-46hi wm-shadow"/><path class="pj0_m3bma"/><path class="rcbgasbpl"/><path class="ejp8hlmyz"/><path class="tfzq4cbxe"/><path class="k486vpbuq"/><path class="rz_c_3bau"/><path class="l3yk_bcii wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:git-branch"} {...others} />);
}

export default Component;
