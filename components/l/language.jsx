import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdv8y22na.css';
import '../../css/t/tmi-nmb4a.css';
import '../../css/w/wum78sb3v.css';
import '../../css/f/fz75kacqh.css';
import '../../css/z/zlrosvbvz.css';
import '../../css/x/xg6jay3rd.css';
import '../../css/j/jbcbvwh6a.css';
import '../../css/l/lwejfkbkj.css';
import '../../css/c/c97ieac7f.css';
import '../../css/e/ea3vkrbqu.css';
import '../../css/u/u351yubzq.css';
import '../../css/s/spmkhhbgu.css';
import '../../css/u/u2--yggzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jdv8y22na wm-shadow"/><path class="tmi-nmb4a wm-a"/><path class="wm-a wum78sb3v"/><path class="fz75kacqh wm-a"/><path class="wm-a zlrosvbvz"/><path class="wm-a xg6jay3rd"/><path class="jbcbvwh6a wm-a"/><path class="lwejfkbkj wm-k"/><path class="c97ieac7f wm-k"/><path class="ea3vkrbqu wm-k"/><path class="u351yubzq wm-k"/><path class="spmkhhbgu wm-k"/><path class="u2--yggzx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:language"} {...others} />);
}

export default Component;
