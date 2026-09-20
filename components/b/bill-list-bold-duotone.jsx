import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7_-lidbt.css';
import '../../css/w/wvn9bfhib.css';
import '../../css/r/rggnvj1qu.css';
import '../../css/x/xpphg_0cg.css';
import '../../css/k/kjp-9sb8z.css';
import '../../css/c/cxccu3fsw.css';
import '../../css/c/cwlk1_-2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s7_-lidbt"/><path class="wvn9bfhib"/><path class="rggnvj1qu"/><path class="xpphg_0cg"/><path class="kjp-9sb8z"/><path class="cxccu3fsw"/><path class="cwlk1_-2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-list-bold-duotone"} {...others} />);
}

export default Component;
