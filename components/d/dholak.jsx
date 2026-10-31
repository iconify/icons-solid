import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i5jkyfbio.css';
import '../../css/m/m6dlot_ns.css';
import '../../css/p/pnrd7bcaq.css';
import '../../css/z/z0zm-9b7j.css';
import '../../css/l/lisx4xbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="i5jkyfbio"/><path class="m6dlot_ns"/><path class="pnrd7bcaq wm-k"/><path class="wm-a z0zm-9b7j"/><path class="lisx4xbvx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:dholak"} {...others} />);
}

export default Component;
