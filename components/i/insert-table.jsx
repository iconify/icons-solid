import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/l/lyard7xsu.css';
import '../../css/b/b5bvdlbrd.css';
import '../../css/x/xmplaw6sc.css';
import '../../css/h/hdq_bpbru.css';
import '../../css/i/ik412wtjo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="lyard7xsu"/><path class="b5bvdlbrd"/><path class="xmplaw6sc"/><path class="hdq_bpbru"/><path class="ik412wtjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:insert-table"} {...others} />);
}

export default Component;
