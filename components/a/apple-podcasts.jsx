import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-q4fxgbt.css';
import '../../css/t/ttuz942-m.css';
import '../../css/n/n-kkngb4q.css';
import '../../css/x/xpji35bsj.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGsIZDIchK" x1="256" x2="256" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="w-q4fxgbt"/><stop offset="1" class="ttuz942-m"/></linearGradient><path fill="url(#SVGsIZDIchK)" class="n-kkngb4q"/><path class="xpji35bsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apple-podcasts"} {...others} />);
}

export default Component;
