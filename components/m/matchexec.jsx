import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo632jadu.css';
import '../../css/e/e08xtmbgj.css';
import '../../css/f/fakjnhbll.css';
import '../../css/v/v_asvpm5w.css';
import '../../css/h/heghy47zm.css';
import '../../css/f/f1x7_w9bf.css';
import '../../css/z/zadubp47c.css';
import '../../css/h/h95g6bcij.css';
import '../../css/d/dlja1acdj.css';
import '../../css/c/ct9syabsk.css';
import '../../css/v/vvwab49qt.css';
import '../../css/p/pkdt2zb3t.css';
import '../../css/p/py-4q6b8g.css';
import '../../css/f/fot4u_bbz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xo632jadu"/><path class="e08xtmbgj"/><path class="fakjnhbll"/><path class="v_asvpm5w"/><path class="heghy47zm"/><path class="f1x7_w9bf"/><path class="zadubp47c"/><path class="h95g6bcij"/><path class="dlja1acdj"/><path class="ct9syabsk"/><path class="vvwab49qt"/><path class="pkdt2zb3t"/><path class="py-4q6b8g"/><path class="fot4u_bbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:matchexec"} {...others} />);
}

export default Component;
