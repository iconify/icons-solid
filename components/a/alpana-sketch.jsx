import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dokvabczg.css';
import '../../css/o/oas66acpd.css';
import '../../css/g/ggxowbc9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dokvabczg wm-k"/><path class="oas66acpd wm-k"/><path class="ggxowbc9f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alpana-sketch"} {...others} />);
}

export default Component;
