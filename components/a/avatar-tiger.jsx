import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y3rfirbra.css';
import '../../css/k/kn21p-bsc.css';
import '../../css/o/o0f9qbbtk.css';
import '../../css/l/lsx37mw-v.css';
import '../../css/n/nh9hm0bfl.css';
import '../../css/l/lskufrbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="y3rfirbra"/><path class="kn21p-bsc"/><path class="o0f9qbbtk wm-shine"/><path class="lsx37mw-v wm-k"/><path class="nh9hm0bfl wm-a"/><path class="lskufrbgk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-tiger"} {...others} />);
}

export default Component;
