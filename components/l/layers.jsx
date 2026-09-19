import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ly52aibmo.css';
import '../../css/x/xrxaul_zl.css';
import '../../css/d/dv0ekmbgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ly52aibmo"/><path class="xrxaul_zl"/><path class="dv0ekmbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mono-icons:layers"} {...others} />);
}

export default Component;
