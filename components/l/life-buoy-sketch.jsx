import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m05ok2q9c.css';
import '../../css/i/i84v56bxz.css';
import '../../css/k/k808-jbxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m05ok2q9c"/><path class="i84v56bxz wm-k"/><path class="k808-jbxa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:life-buoy-sketch"} {...others} />);
}

export default Component;
