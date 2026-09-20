import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-_fghbjz.css';
import '../../css/x/xr8r9cbdg.css';
import '../../css/d/d6dq12uhl.css';
import '../../css/c/c41gb1yev.css';
import '../../css/i/iansas19n.css';
import '../../css/t/t37-ptgmg.css';
import '../../css/e/eend90til.css';
import '../../css/z/zg4trxbzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z-_fghbjz"/><path class="xr8r9cbdg"/><path class="d6dq12uhl"/><path class="c41gb1yev"/><path class="iansas19n"/><path class="t37-ptgmg"/><path class="eend90til"/><path class="zg4trxbzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-dashed-outline"} {...others} />);
}

export default Component;
