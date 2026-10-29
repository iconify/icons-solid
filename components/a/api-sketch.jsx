import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wcs1vfnqu.css';
import '../../css/k/kpl6t54po.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wcs1vfnqu wm-k"/><path class="kpl6t54po wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:api-sketch"} {...others} />);
}

export default Component;
