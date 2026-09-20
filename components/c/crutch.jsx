import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmgukn87m.css';
import '../../css/h/hzhjkd9qs.css';
import '../../css/t/tcjp2ixaq.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/p/ptnvr4b0o.css';
import '../../css/m/mdaycg09e.css';
import '../../css/y/yc1apxber.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="zmgukn87m"><path class="hzhjkd9qs"/><path class="tcjp2ixaq"/></g><g class="brzn_0bpr"><path class="ptnvr4b0o"/><path class="mdaycg09e"/><path class="yc1apxber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:crutch"} {...others} />);
}

export default Component;
