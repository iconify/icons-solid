import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i8521mb4g.css';
import '../../css/k/kvi7rxbfc.css';
import '../../css/q/qp_sidblt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i8521mb4g"/><path class="kvi7rxbfc"/><path class="qp_sidblt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folder-sparkles-duotone"} {...others} />);
}

export default Component;
