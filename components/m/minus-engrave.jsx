import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lvmi_5btw.css';
import '../../css/s/svuiypvdj.css';
import '../../css/z/z8g2jgblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lvmi_5btw"/><path class="svuiypvdj wm-shadow"/><path class="z8g2jgblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:minus-engrave"} {...others} />);
}

export default Component;
