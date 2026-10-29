import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0ypp2znh.css';
import '../../css/a/a-jv6jbok.css';
import '../../css/c/ctia2zbcx.css';
import '../../css/o/o70nm2bwk.css';
import '../../css/t/tonjx02jy.css';
import '../../css/u/u13etts8u.css';
import '../../css/a/ajrgo6_vl.css';
import '../../css/x/x25at7mtv.css';
import '../../css/e/e_pj7eetw.css';
import '../../css/b/b6f-12uln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a0ypp2znh wm-k"/><path class="a-jv6jbok wm-k"/><path class="ctia2zbcx wm-k"/><path class="o70nm2bwk wm-k"/><path class="tonjx02jy wm-k"/><path class="u13etts8u wm-k"/><path class="ajrgo6_vl wm-shine"/><path class="wm-s x25at7mtv"/><path class="e_pj7eetw wm-s"/><path class="b6f-12uln wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:folder-minus"} {...others} />);
}

export default Component;
