import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dc0gfbjei.css';
import '../../css/n/nntu6ub7p.css';
import '../../css/p/pkmigf6aa.css';
import '../../css/n/nfjuifbiw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dc0gfbjei"/><path class="nntu6ub7p wm-shine"/><path class="pkmigf6aa wm-k"/><path class="nfjuifbiw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:coins"} {...others} />);
}

export default Component;
