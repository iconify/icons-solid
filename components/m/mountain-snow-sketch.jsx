import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/ddrij4byh.css';
import '../../css/u/uy1c6ogkr.css';
import '../../css/p/pt47m9bdk.css';
import '../../css/w/w2na52oxh.css';
import '../../css/o/o_3oriblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ddrij4byh"/><path class="uy1c6ogkr wm-k"/><path class="pt47m9bdk wm-a"/><path class="w2na52oxh wm-k"/><path class="o_3oriblb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mountain-snow-sketch"} {...others} />);
}

export default Component;
