import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f86sbobhz.css';
import '../../css/w/wdmkhm1ay.css';
import '../../css/p/p3kg65b0q.css';
import '../../css/o/ox-2d1b1w.css';
import '../../css/w/w4_nxlbcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="f86sbobhz"/><path class="wdmkhm1ay"/><path class="p3kg65b0q"/><path class="ox-2d1b1w"/><path class="w4_nxlbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:fire-alarm"} {...others} />);
}

export default Component;
