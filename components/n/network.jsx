import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vyxxabdkt.css';
import '../../css/v/vb7mw4b_v.css';
import '../../css/d/d4uf2sbry.css';
import '../../css/f/f86k_4cup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vyxxabdkt"/><path class="vb7mw4b_v wm-shine"/><path class="d4uf2sbry wm-k"/><path class="f86k_4cup wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:network"} {...others} />);
}

export default Component;
