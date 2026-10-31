import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sswueyb5k.css';
import '../../css/d/dskj_v-8n.css';
import '../../css/g/g1wy37vpl.css';
import '../../css/e/emma5uf1l.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sswueyb5k"/><path class="dskj_v-8n wm-shine"/><path class="g1wy37vpl wm-k"/><path class="emma5uf1l wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:baby"} {...others} />);
}

export default Component;
