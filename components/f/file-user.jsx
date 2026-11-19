import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgloxx66r.css';
import '../../css/q/q2clqub3k.css';
import '../../css/t/tn62aexqc.css';
import '../../css/d/dq84scb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fgloxx66r"/><path class="q2clqub3k"/><path class="tn62aexqc"/><path class="dq84scb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-user"} {...others} />);
}

export default Component;
