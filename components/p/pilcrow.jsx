import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/weyzglx1l.css';
import '../../css/i/i8f1y3_kg.css';
import '../../css/w/wiumt4pza.css';
import '../../css/c/cx2irjbrw.css';
import '../../css/s/sxwbwnbsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="weyzglx1l"/><path class="i8f1y3_kg wm-shine"/><path class="wiumt4pza wm-k"/><path class="cx2irjbrw wm-a"/><path class="sxwbwnbsh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pilcrow"} {...others} />);
}

export default Component;
