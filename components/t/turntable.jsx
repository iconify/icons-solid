import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ansjtswah.css';
import '../../css/k/kt2lmwt_w.css';
import '../../css/w/w8ml0s3hx.css';
import '../../css/l/ld6h9lznm.css';
import '../../css/r/rm6whwysk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ansjtswah"/><rect transform="matrix(0 -1 -1 0 22.3 19.23)" class="kt2lmwt_w"/><circle class="w8ml0s3hx"/><path class="ld6h9lznm"/><path class="rm6whwysk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:turntable"} {...others} />);
}

export default Component;
