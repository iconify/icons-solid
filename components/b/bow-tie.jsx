import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_nz2km3f.css';
import '../../css/x/xd7o8thgk.css';
import '../../css/f/frdjkvbwc.css';
import '../../css/c/cxmr7u86u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f_nz2km3f"/><path class="xd7o8thgk"/><rect transform="matrix(0 -1 -1 0 14.52 15.32)" class="frdjkvbwc"/><path class="cxmr7u86u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bow-tie"} {...others} />);
}

export default Component;
