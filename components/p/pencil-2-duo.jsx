import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1e49sbzn.css';
import '../../css/i/id1bfh7lp.css';
import '../../css/l/l3dxkxbxz.css';
import '../../css/n/nn44yk3bi.css';
import '../../css/t/t71nflw-x.css';
import '../../css/f/f_1s0fvnb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="z1e49sbzn"/><path class="id1bfh7lp"/><path class="l3dxkxbxz"/><path class="nn44yk3bi"/><path class="t71nflw-x"/><path class="f_1s0fvnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pencil-2-duo"} {...others} />);
}

export default Component;
