import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oua51pdjw.css';
import '../../css/n/nncr0gjwr.css';
import '../../css/h/h3f-tbb6j.css';
import '../../css/v/vy9khb81y.css';
import '../../css/c/cwe0l_ktm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oua51pdjw"/><path class="nncr0gjwr wm-s"/><path class="h3f-tbb6j wm-k"/><path class="vy9khb81y wm-a"/><path class="cwe0l_ktm wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heater-sketch"} {...others} />);
}

export default Component;
