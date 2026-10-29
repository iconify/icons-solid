import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pp4twbc7s.css';
import '../../css/e/exte1hb4i.css';
import '../../css/o/open-1a-p.css';
import '../../css/i/iakcnbrfh.css';
import '../../css/u/umh6b8juy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pp4twbc7s wm-k"/><path class="exte1hb4i wm-k"/><path class="open-1a-p wm-k"/><path class="iakcnbrfh wm-k"/><path class="umh6b8juy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thermometer-sketch"} {...others} />);
}

export default Component;
