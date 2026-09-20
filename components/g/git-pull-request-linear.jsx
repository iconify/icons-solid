import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/i/ixqjpwl1k.css';
import '../../css/x/xq0r2t84g.css';
import '../../css/p/pu5j3xbce.css';
import '../../css/r/r80i7sb4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ua_8dab4r"/><path class="ixqjpwl1k"/><path class="xq0r2t84g"/><path class="pu5j3xbce"/><path class="r80i7sb4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-pull-request-linear"} {...others} />);
}

export default Component;
