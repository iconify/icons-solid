import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/b/bm6v8pbws.css';
import '../../css/a/ai8ax93ul.css';
import '../../css/i/ip3awx7st.css';
import '../../css/u/uif6a9b9u.css';
import '../../css/a/ac2kqgrdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGoW2pkbpj" x1="9.01" x2="15.01" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGoW2pkbpj)" class="bm6v8pbws"/><path class="ai8ax93ul wm-a"/><path class="ip3awx7st wm-shine"/><path class="uif6a9b9u wm-shine"/><path class="ac2kqgrdw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:lock-keyhole"} {...others} />);
}

export default Component;
