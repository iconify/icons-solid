import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/b-myucbfi.css';
import '../../css/w/w2tkidb6m.css';
import '../../css/t/tas0xabhy.css';
import '../../css/e/eqaz9db1b.css';
import '../../css/o/ozvu4bk6l.css';
import '../../css/t/t5bxn5bvn.css';
import '../../css/i/izi3nbc7j.css';
import '../../css/h/hqdf_ab_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="b-myucbfi"/><path class="w2tkidb6m"/><path class="tas0xabhy wm-shine"/><path class="eqaz9db1b wm-k"/><path class="ozvu4bk6l wm-a"/><path class="t5bxn5bvn"/><path class="izi3nbc7j"/><path class="hqdf_ab_s wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:paw-print"} {...others} />);
}

export default Component;
