import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r5ymwtm7v.css';
import '../../css/v/vnoc3_b_k.css';
import '../../css/m/mat8n3aim.css';
import '../../css/g/g56b45b0x.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="r5ymwtm7v"/><path class="vnoc3_b_k wm-shine"/><path class="mat8n3aim wm-k"/><path class="g56b45b0x wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud-alert"} {...others} />);
}

export default Component;
