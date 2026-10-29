import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xpm3rbbsn.css';
import '../../css/u/u7czf0bqt.css';
import '../../css/m/mggu2tbml.css';
import '../../css/n/nu8tdetna.css';
import '../../css/f/fagua8bxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xpm3rbbsn"/><path class="u7czf0bqt wm-shadow"/><path class="mggu2tbml"/><path class="nu8tdetna"/><path class="fagua8bxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stethoscope-engrave"} {...others} />);
}

export default Component;
