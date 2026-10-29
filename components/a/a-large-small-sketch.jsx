import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n6nz3l42u.css';
import '../../css/u/uhxrumbwl.css';
import '../../css/f/flz0kebyw.css';
import '../../css/a/a_pj4bc-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n6nz3l42u wm-k"/><path class="uhxrumbwl wm-a"/><path class="flz0kebyw wm-k"/><path class="a_pj4bc-f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:a-large-small-sketch"} {...others} />);
}

export default Component;
