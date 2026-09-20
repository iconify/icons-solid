import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vufk-kxci.css';
import '../../css/q/qgy99obou.css';
import '../../css/k/k0evexoqr.css';
import '../../css/n/nrfzh4bnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vufk-kxci"/><path clip-rule="evenodd" class="qgy99obou"/><circle class="k0evexoqr"/><path class="nrfzh4bnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-load-box-light"} {...others} />);
}

export default Component;
