import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xtt1ysbre.css';
import '../../css/b/blzdo3hjo.css';
import '../../css/x/xyd9cyb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xtt1ysbre"/><path class="blzdo3hjo wm-shadow"/><path class="xyd9cyb9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:braces-engrave"} {...others} />);
}

export default Component;
