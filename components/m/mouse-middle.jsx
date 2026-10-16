import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzqr7-3bp.css';
import '../../css/l/l-5wxeyst.css';
import '../../css/f/fux-f_bmp.css';
import '../../css/d/d6ek-x1th.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nzqr7-3bp"/><path class="l-5wxeyst"/><rect transform="matrix(-1 0 0 1 14.31 6.38)" class="fux-f_bmp"/><path class="d6ek-x1th"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-middle"} {...others} />);
}

export default Component;
