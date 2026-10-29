import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xhlos4b5a.css';
import '../../css/m/m31ubcc6y.css';
import '../../css/s/s9q4dubun.css';
import '../../css/z/z_224773w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-a xhlos4b5a"/><path class="m31ubcc6y wm-k"/><path class="s9q4dubun wm-a"/><path class="wm-s z_224773w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pichkari-sketch"} {...others} />);
}

export default Component;
