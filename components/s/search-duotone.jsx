import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/venhj685r.css';
import '../../css/x/xexl16bfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="venhj685r"/><path class="xexl16bfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-duotone"} {...others} />);
}

export default Component;
