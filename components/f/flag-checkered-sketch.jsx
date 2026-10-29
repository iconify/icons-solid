import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/li_e4ibwl.css';
import '../../css/m/moh80718a.css';
import '../../css/a/astts52ej.css';
import '../../css/t/tz8pg4bwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="li_e4ibwl wm-k"/><path class="moh80718a wm-a"/><path class="astts52ej wm-k"/><path class="tz8pg4bwr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flag-checkered-sketch"} {...others} />);
}

export default Component;
