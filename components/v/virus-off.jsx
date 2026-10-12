import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt-usgbwg.css';
import '../../css/o/om1x-cleu.css';
import '../../css/h/hxq3r-b3c.css';
import '../../css/x/x0idx2b_y.css';
import '../../css/q/q6ly_lxbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yt-usgbwg"/><circle transform="rotate(90 12 11.96)" class="om1x-cleu"/><circle transform="rotate(90 12 11.96)" class="hxq3r-b3c"/><path class="x0idx2b_y"/><path class="q6ly_lxbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:virus-off"} {...others} />);
}

export default Component;
