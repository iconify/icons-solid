import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/t/ttkbf-b9p.css';
import '../../css/y/ycanvubob.css';
import '../../css/q/qsgzdxlqn.css';
import '../../css/l/lh8d3idry.css';
import '../../css/w/wtps_acii.css';
import '../../css/b/b-x8cbbrt.css';
import '../../css/s/sqefxmlwr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ttkbf-b9p"/><path class="ycanvubob"/><path class="qsgzdxlqn"/><path class="lh8d3idry"/><path class="wtps_acii"/><path class="b-x8cbbrt"/><path class="sqefxmlwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:carrot"} {...others} />);
}

export default Component;
