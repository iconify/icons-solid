import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmt07fb9n.css';
import '../../css/u/uuy4bnjza.css';
import '../../css/c/ccgir63iw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/t/t1de8ccuc.css';
import '../../css/w/wzdw02b4v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bmt07fb9n"/><path class="uuy4bnjza"/><path class="ccgir63iw"/><g class="brzn_0bpr"><path class="t1de8ccuc"/><path class="wzdw02b4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:up-pointing-triangle-with-left-half-black"} {...others} />);
}

export default Component;
