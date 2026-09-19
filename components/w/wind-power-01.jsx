import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y1uotmb_k.css';
import '../../css/w/wl67mmbfj.css';
import '../../css/c/c8nl7ybmv.css';
import '../../css/r/r0um2wevx.css';
import '../../css/y/yjjkalf5i.css';
import '../../css/x/x-jl-u4op.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y1uotmb_k"/><circle class="wl67mmbfj"/><ellipse class="c8nl7ybmv"/><path class="r0um2wevx"/><path class="yjjkalf5i"/><path class="x-jl-u4op"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wind-power-01"} {...others} />);
}

export default Component;
