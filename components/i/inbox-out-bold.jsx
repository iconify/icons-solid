import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zpazotbvo.css';
import '../../css/q/qj2_vhona.css';
import '../../css/x/x4_lcrb9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zpazotbvo"/><path class="qj2_vhona"/><path class="x4_lcrb9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-out-bold"} {...others} />);
}

export default Component;
