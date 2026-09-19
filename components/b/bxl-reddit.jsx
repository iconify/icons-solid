import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyprt8xil.css';
import '../../css/c/czi-3ob_q.css';
import '../../css/u/u_tnrpbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="jyprt8xil"/><path class="czi-3ob_q"/><path class="u_tnrpbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-reddit"} {...others} />);
}

export default Component;
