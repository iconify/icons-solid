import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exynw60od.css';
import '../../css/f/fv3l_rq4r.css';
import '../../css/s/ss458-5ip.css';
import '../../css/l/lliz-h_ls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="exynw60od"/><path class="fv3l_rq4r"/><circle transform="rotate(90 12.57 12)" class="ss458-5ip"/><path class="lliz-h_ls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:message-channel"} {...others} />);
}

export default Component;
