import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mfl50s7ox.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/l/l1zsq4jxr.css';
import '../../css/m/mxrtyruna.css';
import '../../css/u/uflkzv69y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="mfl50s7ox wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="l1zsq4jxr wm-k"/><path class="mxrtyruna wm-a"/><path class="uflkzv69y wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fingerprint-blueprint"} {...others} />);
}

export default Component;
