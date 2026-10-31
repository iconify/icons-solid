import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gpsm0xkco.css';
import '../../css/a/ak24kis2f.css';
import '../../css/p/ps_og-b6r.css';
import '../../css/o/o8-na1b6h.css';
import '../../css/w/wnyo99b7c.css';
import '../../css/q/qz0jpbtce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gpsm0xkco wm-shadow"/><path class="ak24kis2f"/><path class="ps_og-b6r"/><path class="o8-na1b6h"/><path class="wnyo99b7c"/><path class="qz0jpbtce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bandage"} {...others} />);
}

export default Component;
