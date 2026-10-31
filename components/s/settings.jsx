import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mfnvbxnjn.css';
import '../../css/j/jyq2jnbdg.css';
import '../../css/b/b8thk5bmg.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mfnvbxnjn"/><path class="jyq2jnbdg wm-shine"/><path class="b8thk5bmg wm-k"/><path class="hbi8hhkfx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:settings"} {...others} />);
}

export default Component;
