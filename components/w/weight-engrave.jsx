import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a3ij4ee4d.css';
import '../../css/x/x2xetcbew.css';
import '../../css/i/izb9cccdy.css';
import '../../css/j/jfru2eb2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a3ij4ee4d wm-k"/><path class="wm-shadow x2xetcbew"/><path class="izb9cccdy wm-k"/><path class="jfru2eb2v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:weight-engrave"} {...others} />);
}

export default Component;
