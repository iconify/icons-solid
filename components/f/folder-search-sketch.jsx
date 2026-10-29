import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ra7gopb2d.css';
import '../../css/t/tfkrzecse.css';
import '../../css/r/rb4930b7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ra7gopb2d"/><path class="tfkrzecse wm-k"/><path class="rb4930b7e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-search-sketch"} {...others} />);
}

export default Component;
