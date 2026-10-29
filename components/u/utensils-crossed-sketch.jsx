import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ofv9jmb_s.css';
import '../../css/g/gyxdggaoa.css';
import '../../css/r/r7pcl4hir.css';
import '../../css/s/sxknq0szb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ofv9jmb_s wm-k"/><path class="gyxdggaoa wm-a"/><path class="r7pcl4hir wm-k"/><path class="sxknq0szb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:utensils-crossed-sketch"} {...others} />);
}

export default Component;
