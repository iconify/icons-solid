import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yi6lqbb5x.css';
import '../../css/u/urp_3vpiq.css';
import '../../css/r/r-718ec7i.css';
import '../../css/z/zer89gupx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yi6lqbb5x"/><path class="urp_3vpiq wm-k"/><path class="r-718ec7i wm-s"/><path class="wm-s zer89gupx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-search-sketch"} {...others} />);
}

export default Component;
