import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/k/kgu3nacnk.css';
import '../../css/d/d2iubl9sf.css';
import '../../css/c/cktxgfvbv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/m/mo3au2hfr.css';
import '../../css/c/cf2d7obtp.css';
import '../../css/j/j0w7pcc_f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="kgu3nacnk"/><path class="d2iubl9sf"/><path class="cktxgfvbv"/><path class="n9cednr3v"/><path class="mo3au2hfr"/><path class="cf2d7obtp"/><path class="j0w7pcc_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:grintears"} {...others} />);
}

export default Component;
