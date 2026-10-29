import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcnuoybhd.css';
import '../../css/k/kwtgwt39a.css';
import '../../css/x/x7v48bj2f.css';
import '../../css/k/kpxc04brg.css';
import '../../css/i/i_78q4bro.css';
import '../../css/n/narqv8b7k.css';
import '../../css/y/yyegbxb6r.css';
import '../../css/e/e5-n0ablz.css';
import '../../css/y/yhyoyp4yw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kcnuoybhd wm-shadow"/><path class="kwtgwt39a wm-k"/><path class="wm-k x7v48bj2f"/><path class="kpxc04brg wm-k"/><path class="i_78q4bro wm-k"/><path class="narqv8b7k wm-k"/><path class="wm-shine yyegbxb6r"/><path class="e5-n0ablz wm-a"/><path class="wm-a yhyoyp4yw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:clover"} {...others} />);
}

export default Component;
