import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebpu-5arf.css';
import '../../css/n/n9gulmzpi.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/d/dm8dtzb9t.css';
import '../../css/p/p6-p-0qyp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ebpu-5arf"/><path class="n9gulmzpi"/><g class="brzn_0bpr"><path class="dm8dtzb9t"/><path class="p6-p-0qyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:circle-with-left-half-black"} {...others} />);
}

export default Component;
