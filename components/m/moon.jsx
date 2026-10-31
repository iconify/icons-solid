import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1lwcib4h.css';
import '../../css/k/kh0r37bvb.css';
import '../../css/r/raolf0boj.css';
import '../../css/q/qhv9l0bmp.css';
import '../../css/o/ossi2tbfc.css';
import '../../css/c/cdtaoxbia.css';
import '../../css/x/xoh65ho9p.css';
import '../../css/m/m7p-98clg.css';
import '../../css/z/zz6dpkkqn.css';
import '../../css/y/y0j6qu3ic.css';
import '../../css/g/gex6hglut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b1lwcib4h wm-shadow"/><path class="kh0r37bvb"/><path class="raolf0boj"/><path class="qhv9l0bmp"/><path class="ossi2tbfc"/><path class="cdtaoxbia"/><path class="xoh65ho9p"/><path class="m7p-98clg"/><path class="zz6dpkkqn"/><path class="wm-shine y0j6qu3ic"/><path class="gex6hglut wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:moon"} {...others} />);
}

export default Component;
