import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyb-wtboh.css';
import '../../css/v/vqgmm6bjt.css';
import '../../css/o/odr2ivbps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="wyb-wtboh"><path class="vqgmm6bjt"/><path class="odr2ivbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:centml"} {...others} />);
}

export default Component;
