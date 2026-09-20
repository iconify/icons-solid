import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ykjg-9bfc.css';
import '../../css/d/dgkn91bac.css';
import '../../css/s/slcp8kbwb.css';
import '../../css/c/cjdiyrc3m.css';
import '../../css/g/gf56ieb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ykjg-9bfc"/><path class="dgkn91bac"/><path class="slcp8kbwb"/><path class="cjdiyrc3m"/><path class="gf56ieb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-horizontal-line-duotone"} {...others} />);
}

export default Component;
