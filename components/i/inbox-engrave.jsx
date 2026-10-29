import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tro8k1dnr.css';
import '../../css/w/wpx6pz7qz.css';
import '../../css/y/y9ujhnbxv.css';
import '../../css/s/soujtab5z.css';
import '../../css/x/xs03ubb6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tro8k1dnr wm-k"/><path class="wm-a wpx6pz7qz"/><path class="wm-shadow y9ujhnbxv"/><path class="soujtab5z wm-k"/><path class="wm-a xs03ubb6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:inbox-engrave"} {...others} />);
}

export default Component;
