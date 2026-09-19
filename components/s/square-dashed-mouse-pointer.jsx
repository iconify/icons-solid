import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/h_mcpzbxp.css';
import '../../css/w/wca_e2byw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="h_mcpzbxp"/><path class="wca_e2byw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-dashed-mouse-pointer"} {...others} />);
}

export default Component;
