import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hy0wlvbcc.css';
import '../../css/n/ndzvk7pha.css';
import '../../css/w/wbpww_52o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hy0wlvbcc"/><path class="ndzvk7pha"/><path clip-rule="evenodd" class="wbpww_52o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-bold"} {...others} />);
}

export default Component;
