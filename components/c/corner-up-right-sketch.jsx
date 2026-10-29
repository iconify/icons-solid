import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d5i159bou.css';
import '../../css/g/gvvo_3b-f.css';
import '../../css/g/g59_xzp-m.css';
import '../../css/p/psmr5dd8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="d5i159bou wm-k"/><path class="gvvo_3b-f wm-a"/><path class="g59_xzp-m wm-k"/><path class="psmr5dd8q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:corner-up-right-sketch"} {...others} />);
}

export default Component;
