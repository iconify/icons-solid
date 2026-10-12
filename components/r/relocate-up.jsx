import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywvawrbnc.css';
import '../../css/i/iqhyvgmxa.css';
import '../../css/x/xdv_jsb2q.css';
import '../../css/d/dv4r3_b5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.3 22.18)" class="ywvawrbnc"/><rect transform="matrix(0 -1 -1 0 21.3 10.52)" class="ywvawrbnc"/><rect transform="matrix(0 -1 -1 0 21.3 22.18)" class="iqhyvgmxa"/><rect transform="matrix(0 -1 -1 0 21.3 10.52)" class="iqhyvgmxa"/><path class="xdv_jsb2q"/><path class="dv4r3_b5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:relocate-up"} {...others} />);
}

export default Component;
