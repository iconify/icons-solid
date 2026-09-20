import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l1waajdcr.css';
import '../../css/q/qp572b-9o.css';
import '../../css/c/c0a3l760t.css';
import '../../css/f/f-g36kx1u.css';
import '../../css/x/xxp_wr0pi.css';
import '../../css/y/yll8_0mvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l1waajdcr"/><path class="qp572b-9o"/><path class="c0a3l760t"/><path class="f-g36kx1u"/><path class="xxp_wr0pi"/><path class="yll8_0mvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:object-scan-bold"} {...others} />);
}

export default Component;
