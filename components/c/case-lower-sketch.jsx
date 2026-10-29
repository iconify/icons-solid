import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hisprwbpw.css';
import '../../css/j/jiv6tp4bc.css';
import '../../css/p/p2ghj7bdf.css';
import '../../css/r/rn1vb_b2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hisprwbpw wm-k"/><path class="jiv6tp4bc wm-a"/><path class="p2ghj7bdf wm-k"/><path class="rn1vb_b2z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:case-lower-sketch"} {...others} />);
}

export default Component;
