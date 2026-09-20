import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpyqy236k.css';
import '../../css/s/sgctswr3q.css';
import '../../css/n/n73lv7b2b.css';
import '../../css/z/zj2w8l-ev.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/z/ztg5wmoma.css';
import '../../css/c/ckog6aswp.css';
import '../../css/q/qij_0zblh.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wpyqy236k"><circle class="sgctswr3q"/><path class="n73lv7b2b"/><path class="zj2w8l-ev"/></g><g class="brzn_0bpr"><circle class="ztg5wmoma"/><path class="ckog6aswp"/><path class="qij_0zblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-in-lotus-position-medium-light-skin-tone"} {...others} />);
}

export default Component;
