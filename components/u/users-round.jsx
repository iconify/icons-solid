import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lk4btcbgd.css';
import '../../css/l/ldi6bv6xh.css';
import '../../css/j/jbuyg8b_q.css';
import '../../css/t/t_g_x1biv.css';
import '../../css/c/c-t_59bnx.css';
import '../../css/d/d0irknsdx.css';
import '../../css/y/yaecgsrwr.css';
import '../../css/e/eugphrb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="lk4btcbgd"/><path class="ldi6bv6xh"/><path class="jbuyg8b_q wm-shine"/><path class="t_g_x1biv wm-k"/><path class="c-t_59bnx wm-a"/><path class="d0irknsdx"/><path class="yaecgsrwr"/><path class="eugphrb7q wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:users-round"} {...others} />);
}

export default Component;
