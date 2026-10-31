import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xwcip4ebp.css';
import '../../css/m/mxf6vs2_z.css';
import '../../css/k/k55be6yhw.css';
import '../../css/c/ck-4ht99s.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/t/t2rhaj14x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="xwcip4ebp"/><path class="mxf6vs2_z wm-shine"/><path class="k55be6yhw wm-k"/><path class="ck-4ht99s wm-a"/><path class="qr4ochb5c wm-s"/><path class="t2rhaj14x wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:timer-off"} {...others} />);
}

export default Component;
