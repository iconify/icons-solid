import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kxhfa_bfi.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/kjmig_qpk.css';
import '../../css/h/hnamav36t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kxhfa_bfi"/><path class="qr4ochb5c wm-s"/><path class="kjmig_qpk"/><path class="hnamav36t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-off-duo"} {...others} />);
}

export default Component;
