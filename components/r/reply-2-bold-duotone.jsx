import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp39eob_e.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/wb8cjb-ns.css';
import '../../css/g/gy2nyz5qi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dp39eob_e"/><g class="xtpeb-edw"><path class="wb8cjb-ns"/><path class="gy2nyz5qi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reply-2-bold-duotone"} {...others} />);
}

export default Component;
