import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/buezohm7s.css';
import '../../css/f/fa586t8_z.css';
import '../../css/h/hsajntj5k.css';
import '../../css/v/vkn0j2bym.css';
import '../../css/h/hlzyut9fw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="buezohm7s wm-k"/><path class="fa586t8_z wm-s"/><path class="hsajntj5k wm-k"/><path class="vkn0j2bym wm-a"/><path class="hlzyut9fw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sunrise-sketch"} {...others} />);
}

export default Component;
