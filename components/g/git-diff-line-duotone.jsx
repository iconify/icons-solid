import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e7_249wdi.css';
import '../../css/a/aab3v6bhh.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/p/pu5j3xbce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e7_249wdi"/><path class="aab3v6bhh"/><path class="ua_8dab4r"/><path class="pu5j3xbce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-diff-line-duotone"} {...others} />);
}

export default Component;
