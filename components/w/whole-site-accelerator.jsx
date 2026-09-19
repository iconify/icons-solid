import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/eookvtwva.css';
import '../../css/r/rnffvwo8j.css';
import '../../css/c/cxbhyacky.css';
import '../../css/w/wkwkt0bck.css';
import '../../css/o/ojk-8wb7n.css';
import '../../css/h/hnz_hdcpp.css';
import '../../css/z/zhf0pxb6w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="eookvtwva"/><circle class="rnffvwo8j"/><circle class="cxbhyacky"/><circle class="wkwkt0bck"/><path class="ojk-8wb7n"/><path class="hnz_hdcpp"/><path class="zhf0pxb6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:whole-site-accelerator"} {...others} />);
}

export default Component;
