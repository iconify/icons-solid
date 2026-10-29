import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mwmmp3ikq.css';
import '../../css/e/eich63bwd.css';
import '../../css/z/z0kj2dbmd.css';
import '../../css/p/p19jodbej.css';
import '../../css/e/eymwfsswu.css';
import '../../css/v/vrr90_wrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mwmmp3ikq wm-k"/><path class="eich63bwd wm-a"/><path class="wm-s z0kj2dbmd"/><path class="p19jodbej wm-k"/><path class="eymwfsswu wm-a"/><path class="vrr90_wrn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heading-3-sketch"} {...others} />);
}

export default Component;
