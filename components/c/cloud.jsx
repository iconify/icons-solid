import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r5ymwtm7v.css';
import '../../css/y/ynxc2aczu.css';
import '../../css/v/vnoc3_b_k.css';
import '../../css/m/mat8n3aim.css';
import '../../css/z/z0uu81icn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="r5ymwtm7v"/><path class="ynxc2aczu"/><path class="vnoc3_b_k wm-shine"/><path class="mat8n3aim"/><path class="z0uu81icn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud"} {...others} />);
}

export default Component;
