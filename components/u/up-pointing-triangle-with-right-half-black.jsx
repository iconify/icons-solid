import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efpqsy83s.css';
import '../../css/e/ep32ud1td.css';
import '../../css/x/xwic2fata.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/t/t1de8ccuc.css';
import '../../css/w/wzdw02b4v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="efpqsy83s"/><path class="ep32ud1td"/><path class="xwic2fata"/><g class="brzn_0bpr"><path class="t1de8ccuc"/><path class="wzdw02b4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:up-pointing-triangle-with-right-half-black"} {...others} />);
}

export default Component;
