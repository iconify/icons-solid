import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yaetbdc1q.css';
import '../../css/o/o4hak_sxi.css';
import '../../css/d/dfnnh7b0k.css';
import '../../css/d/db01hi87v.css';
import '../../css/v/vglod77-y.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yaetbdc1q"/><path class="o4hak_sxi"/><path class="dfnnh7b0k"/><path class="db01hi87v"/><path class="vglod77-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cake-slice"} {...others} />);
}

export default Component;
