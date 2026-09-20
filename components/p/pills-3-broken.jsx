import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tmsthrbjy.css';
import '../../css/c/cns6ly1bg.css';
import '../../css/p/pqsrmgrdx.css';
import '../../css/h/hqsaabc6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tmsthrbjy"/><path class="cns6ly1bg"/><path class="pqsrmgrdx"/><path class="hqsaabc6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-3-broken"} {...others} />);
}

export default Component;
