import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hfi2o39er.css';
import '../../css/p/p6q3_755t.css';
import '../../css/o/opki4xy1f.css';
import '../../css/i/i9rgmobgb.css';
import '../../css/t/tx6wzpb9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="hfi2o39er"/><path class="p6q3_755t wm-shine"/><path class="opki4xy1f wm-k"/><path class="i9rgmobgb wm-a"/><path class="tx6wzpb9u wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:octagon-alert"} {...others} />);
}

export default Component;
