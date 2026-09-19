import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/l/l_aj69g5s.css';
import '../../css/a/at5ze9bhf.css';
import '../../css/k/kjdyhpbpd.css';
import '../../css/p/pp414kbev.css';
import '../../css/y/y9281jbuw.css';
import '../../css/r/r7fv4pb3x.css';
import '../../css/z/zi4o84bcb.css';
import '../../css/a/aw_xzsk_b.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="l_aj69g5s"/><path clip-rule="evenodd" class="at5ze9bhf"/><path clip-rule="evenodd" class="kjdyhpbpd"/><path clip-rule="evenodd" class="pp414kbev"/><path clip-rule="evenodd" class="y9281jbuw"/></g><path clip-rule="evenodd" class="r7fv4pb3x"/><path clip-rule="evenodd" class="zi4o84bcb"/><path clip-rule="evenodd" class="aw_xzsk_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:person-checkmark-print"} {...others} />);
}

export default Component;
