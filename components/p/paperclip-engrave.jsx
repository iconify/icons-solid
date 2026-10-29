import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gxbk2tj2j.css';
import '../../css/r/ral12u3xi.css';
import '../../css/n/ns9l4jexk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gxbk2tj2j"/><path class="ral12u3xi wm-shadow"/><path class="ns9l4jexk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paperclip-engrave"} {...others} />);
}

export default Component;
