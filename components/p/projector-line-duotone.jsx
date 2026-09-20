import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b5j-xvxce.css';
import '../../css/u/u_9vgsopu.css';
import '../../css/q/qwbipkbye.css';
import '../../css/g/gpxfncb1k.css';
import '../../css/h/h0mdmlb_j.css';
import '../../css/g/ghosdkb_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b5j-xvxce"/><path class="u_9vgsopu"/><circle class="qwbipkbye"/><path class="gpxfncb1k"/><path class="h0mdmlb_j"/><path class="ghosdkb_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:projector-line-duotone"} {...others} />);
}

export default Component;
