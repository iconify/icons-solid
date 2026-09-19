import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/d0t_o0b5n.css';
import '../../css/m/mt0ga6bxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="d0t_o0b5n"/><path class="mt0ga6bxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:edit-01"} {...others} />);
}

export default Component;
