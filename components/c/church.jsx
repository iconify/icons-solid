import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p7ozhwb8g.css';
import '../../css/n/n78vp2bgg.css';
import '../../css/k/k_bitrnlx.css';
import '../../css/e/eigdfn47d.css';
import '../../css/y/y_fqobb9e.css';
import '../../css/r/rj2e_2hxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="p7ozhwb8g"/><path class="n78vp2bgg"/><path class="k_bitrnlx wm-shine"/><path class="eigdfn47d wm-k"/><path class="wm-a y_fqobb9e"/><path class="rj2e_2hxk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:church"} {...others} />);
}

export default Component;
