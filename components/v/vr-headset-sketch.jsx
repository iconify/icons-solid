import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q-hyczb2j.css';
import '../../css/q/qballtb5n.css';
import '../../css/v/vjzfk8ovh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q-hyczb2j"/><path class="qballtb5n wm-k"/><path class="vjzfk8ovh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:vr-headset-sketch"} {...others} />);
}

export default Component;
