import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/x/xjxmmxl-b.css';
import '../../css/c/c39h9dsia.css';
import '../../css/b/b3rvp9bqi.css';
import '../../css/q/qqa3t9b7l.css';
import '../../css/b/bgqq_8bnh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="xjxmmxl-b"/><path class="c39h9dsia"/><path class="b3rvp9bqi"/><path class="qqa3t9b7l"/><path class="bgqq_8bnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:handwashing-fluid"} {...others} />);
}

export default Component;
