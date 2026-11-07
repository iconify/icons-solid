import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xra0qzbnd.css';
import '../../css/p/pky70kbzj.css';
import '../../css/l/llvorcluf.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/w6t2ax_st.css';
import '../../css/o/o2fwy1lbq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xra0qzbnd"/><path clip-rule="evenodd" class="pky70kbzj"/><path clip-rule="evenodd" class="llvorcluf"/><g class="xtpeb-edw"><path class="w6t2ax_st"/><path class="o2fwy1lbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-right-bold-duotone"} {...others} />);
}

export default Component;
