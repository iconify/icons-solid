import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qgwydobiv.css';
import '../../css/k/k3dhtc42a.css';
import '../../css/p/pebjutbqq.css';
import '../../css/e/eyseibbic.css';
import '../../css/n/nkk_t6bky.css';
import '../../css/f/fdu3xhciy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qgwydobiv wm-k"/><path class="k3dhtc42a wm-k"/><path class="pebjutbqq wm-a"/><path class="eyseibbic wm-a"/><path class="nkk_t6bky"/><path class="fdu3xhciy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cat-sketch"} {...others} />);
}

export default Component;
