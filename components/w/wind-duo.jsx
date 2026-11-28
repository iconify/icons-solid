import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u2ii69bww.css';
import '../../css/z/zb3o_mbtu.css';
import '../../css/d/dapmpxbfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="u2ii69bww"/><path class="zb3o_mbtu"/><path class="dapmpxbfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wind-duo"} {...others} />);
}

export default Component;
