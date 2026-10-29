import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_s4hcvda.css';
import '../../css/t/t9gpoqo1x.css';
import '../../css/g/g__1eob6r.css';
import '../../css/c/cmyccn96u.css';
import '../../css/m/m7eej_3cr.css';
import '../../css/v/vqobnpbrh.css';
import '../../css/b/b_q-pjbmv.css';
import '../../css/i/is4ozcdzf.css';
import '../../css/w/wb-8kwbuw.css';
import '../../css/e/ev_c3gb_z.css';
import '../../css/x/xn59e1bka.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_s4hcvda wm-shadow"/><path class="t9gpoqo1x wm-a"/><path class="g__1eob6r wm-a"/><path class="cmyccn96u wm-a"/><path class="m7eej_3cr wm-a"/><path class="vqobnpbrh wm-k"/><path class="b_q-pjbmv wm-k"/><path class="is4ozcdzf wm-k"/><path class="wb-8kwbuw wm-k"/><path class="ev_c3gb_z wm-shine"/><path class="wm-k xn59e1bka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:dollar-sign"} {...others} />);
}

export default Component;
