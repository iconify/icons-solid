import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m4dq46b2l.css';
import '../../css/c/c40o4qbmy.css';
import '../../css/i/ihz715blo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m4dq46b2l"/><path class="c40o4qbmy wm-shadow"/><path class="ihz715blo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spider-web-engrave"} {...others} />);
}

export default Component;
