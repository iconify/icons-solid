import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/un8cxoenf.css';
import '../../css/k/kqrliobak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="un8cxoenf"/><path class="kqrliobak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flag-triangle-bulk-round"} {...others} />);
}

export default Component;
