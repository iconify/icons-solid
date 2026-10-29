import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l71k8fb0y.css';
import '../../css/e/eeuoneb2d.css';
import '../../css/i/i1fwsxj1m.css';
import '../../css/n/n54gpdb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l71k8fb0y wm-k"/><path class="eeuoneb2d wm-a"/><path class="i1fwsxj1m wm-k"/><path class="n54gpdb3n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:italic-sketch"} {...others} />);
}

export default Component;
