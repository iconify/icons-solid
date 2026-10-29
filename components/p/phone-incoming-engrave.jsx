import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o3jg7nbdr.css';
import '../../css/x/xsl56zbwo.css';
import '../../css/x/x03t-495s.css';
import '../../css/n/n8ihr8b9o.css';
import '../../css/s/sf6sntbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o3jg7nbdr wm-k"/><path class="wm-s xsl56zbwo"/><path class="wm-shadow x03t-495s"/><path class="n8ihr8b9o wm-k"/><path class="sf6sntbpn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-incoming-engrave"} {...others} />);
}

export default Component;
