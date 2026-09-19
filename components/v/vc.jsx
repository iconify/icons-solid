import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdsj_4jyn.css';
import '../../css/n/ne796rdww.css';
import '../../css/w/w7h_dwbxa.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="wdsj_4jyn"/><path class="ne796rdww"/><path class="w7h_dwbxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:vc"} {...others} />);
}

export default Component;
