import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qo-cleo8d.css';
import '../../css/n/nt8fw_bxa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="qo-cleo8d"/><path clip-rule="evenodd" class="nt8fw_bxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-certificate-paper-outline"} {...others} />);
}

export default Component;
