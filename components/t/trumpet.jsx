import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jix0_wbbx.css';
import '../../css/b/bd13yxb1u.css';
import '../../css/e/eyowyccos.css';
import '../../css/z/zls6mvbbt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="jix0_wbbx"/><path class="bd13yxb1u"/><path class="eyowyccos"/><path class="zls6mvbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:trumpet"} {...others} />);
}

export default Component;
