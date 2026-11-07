import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3dnrk_0v.css';
import '../../css/b/b6kz81jcw.css';
import '../../css/l/lt_dvue1n.css';
import '../../css/w/wuug2ccjk.css';
import '../../css/s/sl_boeb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z3dnrk_0v"/><path class="b6kz81jcw"/><path class="lt_dvue1n"/><path class="wuug2ccjk"/><path class="sl_boeb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-password-unlocked-bold-duotone"} {...others} />);
}

export default Component;
