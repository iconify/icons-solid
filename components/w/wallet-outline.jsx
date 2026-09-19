import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/t8tdq3vdl.css';
import '../../css/m/mnjer5bid.css';
import '../../css/e/e7-t_vbov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="t8tdq3vdl"/><rect class="mnjer5bid"/><circle class="e7-t_vbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:wallet-outline"} {...others} />);
}

export default Component;
