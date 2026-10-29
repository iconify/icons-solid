import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v--q92aev.css';
import '../../css/i/ir6haibsd.css';
import '../../css/g/gorsochjg.css';
import '../../css/q/qy6s686ad.css';
import '../../css/y/yatyg0v9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v--q92aev"/><path class="ir6haibsd wm-shadow"/><path class="gorsochjg"/><path class="qy6s686ad"/><path class="yatyg0v9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-pull-request-engrave"} {...others} />);
}

export default Component;
