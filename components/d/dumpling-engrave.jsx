import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xu_ouqb1p.css';
import '../../css/g/g9a4gtryo.css';
import '../../css/j/jstsvibwd.css';
import '../../css/n/n8lapqogo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xu_ouqb1p"/><path class="g9a4gtryo wm-shadow"/><path class="jstsvibwd wm-k"/><path class="n8lapqogo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dumpling-engrave"} {...others} />);
}

export default Component;
