import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cmyeelv4u.css';
import '../../css/o/ohsupcbxt.css';
import '../../css/i/inidtdb2d.css';
import '../../css/a/aulea8_ox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cmyeelv4u"/><path class="ohsupcbxt wm-a"/><path class="inidtdb2d wm-k"/><path class="aulea8_ox wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thermometer-snowflake-sketch"} {...others} />);
}

export default Component;
