import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8-77cbpa.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/w/wplkh7x2z.css';
import '../../css/r/rh06l-yby.css';
import '../../css/u/uhbcuac0n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q8-77cbpa"/><g class="brzn_0bpr"><circle class="wplkh7x2z"/><path class="rh06l-yby"/><path class="uhbcuac0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:confounded-face"} {...others} />);
}

export default Component;
