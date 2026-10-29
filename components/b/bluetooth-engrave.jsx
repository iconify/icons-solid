import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w78uambvl.css';
import '../../css/g/gn5f4mpcl.css';
import '../../css/q/qkacyrwvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w78uambvl"/><path class="gn5f4mpcl wm-shadow"/><path class="qkacyrwvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bluetooth-engrave"} {...others} />);
}

export default Component;
