import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z_ml12bgo.css';
import '../../css/m/m23x9cwpi.css';
import '../../css/e/exiu9eq2v.css';
import '../../css/o/ovhif5-5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="z_ml12bgo"/><path class="m23x9cwpi wm-a"/><path class="exiu9eq2v wm-k"/><path class="ovhif5-5j wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:medal-sketch"} {...others} />);
}

export default Component;
