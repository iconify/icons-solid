import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4xraxbms.css';
import '../../css/m/mdrgw2bep.css';
import '../../css/z/zt6iuxbgn.css';
import '../../css/t/twyxlh-yq.css';
import '../../css/q/qlzl4ibcz.css';
import '../../css/o/ob5ato-te.css';
import '../../css/k/kc1ftcbdv.css';
import '../../css/a/ay-ndgv6v.css';
import '../../css/q/q3q0bybuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4xraxbms wm-shadow"/><path class="mdrgw2bep wm-k"/><path class="wm-k zt6iuxbgn"/><path class="twyxlh-yq wm-k"/><path class="qlzl4ibcz wm-k"/><path class="ob5ato-te wm-k"/><path class="kc1ftcbdv wm-k"/><path class="ay-ndgv6v wm-k"/><path class="q3q0bybuy wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:headphones"} {...others} />);
}

export default Component;
