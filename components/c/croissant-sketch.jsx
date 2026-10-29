import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/ld14kd3fo.css';
import '../../css/k/kj3ej9b7p.css';
import '../../css/h/hy_wfebxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ld14kd3fo wm-k"/><path class="kj3ej9b7p wm-k"/><path class="hy_wfebxz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:croissant-sketch"} {...others} />);
}

export default Component;
