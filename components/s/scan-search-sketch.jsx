import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u-b_b7bce.css';
import '../../css/v/vbr8th6tj.css';
import '../../css/w/wchmfjfsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u-b_b7bce wm-deco"/><path class="vbr8th6tj wm-k"/><path class="wchmfjfsw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-search-sketch"} {...others} />);
}

export default Component;
