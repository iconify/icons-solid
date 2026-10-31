import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bfuswsbfk.css';
import '../../css/b/bvw8w4fva.css';
import '../../css/n/nm-qj_bex.css';
import '../../css/k/k05fspbzc.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bfuswsbfk"/><path class="bvw8w4fva wm-shine"/><path class="nm-qj_bex wm-k"/><path class="k05fspbzc wm-a"/><path class="w49ngccqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-ghost"} {...others} />);
}

export default Component;
