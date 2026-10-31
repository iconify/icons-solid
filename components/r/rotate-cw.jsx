import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wrbf2zb1l.css';
import '../../css/m/mvpyfac0n.css';
import '../../css/x/xmtccjnlj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k wrbf2zb1l"/><path class="mvpyfac0n wm-a"/><path class="wm-deco xmtccjnlj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:rotate-cw"} {...others} />);
}

export default Component;
