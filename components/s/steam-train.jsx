import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xhu828bgh.css';
import '../../css/m/mz1560bnj.css';
import '../../css/i/ixbwkv4mz.css';
import '../../css/w/wk9de4znk.css';
import '../../css/u/ur3_tunjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xhu828bgh"/><path class="mz1560bnj"/><path class="ixbwkv4mz"/><path class="wk9de4znk"/><path class="ur3_tunjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:steam-train"} {...others} />);
}

export default Component;
