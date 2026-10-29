import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p72l2y11j.css';
import '../../css/w/wnv60flnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p72l2y11j"/><path class="wnv60flnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-sketch"} {...others} />);
}

export default Component;
