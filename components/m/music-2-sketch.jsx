import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vgqb-eb6q.css';
import '../../css/b/b9y4teb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vgqb-eb6q"/><path class="b9y4teb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:music-2-sketch"} {...others} />);
}

export default Component;
