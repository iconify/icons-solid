import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_nutx2xa.css';
import '../../css/g/gkr5rhbkw.css';
import '../../css/y/yorqukb0m.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/w6t2ax_st.css';
import '../../css/o/o2fwy1lbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j_nutx2xa"/><path clip-rule="evenodd" class="gkr5rhbkw"/><path clip-rule="evenodd" class="yorqukb0m"/><g class="mc2zb0bvp"><path class="w6t2ax_st"/><path class="o2fwy1lbq"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-right-bold-duotone"} {...others} />);
}

export default Component;
