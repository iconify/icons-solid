import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywvawrbnc.css';
import '../../css/i/iqhyvgmxa.css';
import '../../css/k/kxsqznbti.css';
import '../../css/b/b4mghfyxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(1 0 0 -1 1.82 21.31)" class="ywvawrbnc"/><rect transform="matrix(1 0 0 -1 13.48 21.31)" class="ywvawrbnc"/><rect transform="matrix(1 0 0 -1 1.82 21.31)" class="iqhyvgmxa"/><rect transform="matrix(1 0 0 -1 13.48 21.31)" class="iqhyvgmxa"/><path class="kxsqznbti"/><path class="b4mghfyxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:relocate-right"} {...others} />);
}

export default Component;
