import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d-_v3vaqc.css';
import '../../css/x/xhce_hbyg.css';
import '../../css/j/jx0woobce.css';
import '../../css/l/lzkg2p4uu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d-_v3vaqc"/><path class="xhce_hbyg"/><path class="jx0woobce"/><circle class="lzkg2p4uu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-left-click-05"} {...others} />);
}

export default Component;
