import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwodtyxau.css';
import '../../css/k/k6lhw3bqr.css';
import '../../css/p/p4w6k1b7p.css';
import '../../css/f/fux-f_bmp.css';
import '../../css/s/seb5n8bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wwodtyxau"/><path class="k6lhw3bqr"/><path class="p4w6k1b7p"/><rect transform="matrix(-1 0 0 1 16.11 6.68)" class="fux-f_bmp"/><path class="seb5n8bzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-left-click"} {...others} />);
}

export default Component;
