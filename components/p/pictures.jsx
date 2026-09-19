import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlyeq3b6o.css';
import '../../css/q/qk3buybpq.css';
import '../../css/s/s_24abblg.css';
import '../../css/f/f4ax4r8uu.css';

const viewBox = {"width":33,"height":32};
const content = `<g class="cuyn6tgcc"><path class="mlyeq3b6o"/><path class="qk3buybpq"/><path class="s_24abblg"/><path class="f4ax4r8uu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:pictures"} {...others} />);
}

export default Component;
