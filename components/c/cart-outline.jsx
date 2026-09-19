import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/ayrv02bwd.css';
import '../../css/a/axt9ohbyr.css';
import '../../css/c/cly7zkdlc.css';
import '../../css/n/ncvieabhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="ayrv02bwd"/><circle class="axt9ohbyr"/><path class="cly7zkdlc"/><path class="ncvieabhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:cart-outline"} {...others} />);
}

export default Component;
