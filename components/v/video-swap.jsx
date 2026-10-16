import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajl2saccr.css';
import '../../css/h/h0e9tcb_u.css';
import '../../css/e/e_3lqlb2p.css';
import '../../css/b/btere7c2k.css';
import '../../css/x/xeb5x5bng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ajl2saccr"/><path class="h0e9tcb_u"/><path clip-rule="evenodd" class="e_3lqlb2p"/><rect transform="matrix(0 -1 -1 0 11.44 11.03)" class="btere7c2k"/><rect transform="matrix(0 -1 -1 0 22.26 22.28)" class="btere7c2k"/><path class="xeb5x5bng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-swap"} {...others} />);
}

export default Component;
