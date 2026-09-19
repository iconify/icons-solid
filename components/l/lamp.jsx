import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/z/zj4jkob1y.css';
import '../../css/o/ohdrrobob.css';
import '../../css/w/wrsw32bnx.css';
import '../../css/t/tvbc5806l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="zj4jkob1y"/><path class="ohdrrobob"/><rect class="wrsw32bnx"/><path class="tvbc5806l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lamp"} {...others} />);
}

export default Component;
