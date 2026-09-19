import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dm4x1bp9i.css';
import '../../css/y/yy7qddc7s.css';
import '../../css/c/cuunliqrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dm4x1bp9i"/><path class="yy7qddc7s"/><path class="cuunliqrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:text-clear"} {...others} />);
}

export default Component;
