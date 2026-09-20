import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n18348kjt.css';
import '../../css/s/sm2vtmb8d.css';
import '../../css/n/nn7d3bcbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n18348kjt"/><path class="sm2vtmb8d"/><path class="nn7d3bcbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:money-cash-bill-stack"} {...others} />);
}

export default Component;
