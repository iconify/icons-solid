import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fj3gwwbrx.css';
import '../../css/q/qrgarccrc.css';
import '../../css/x/x9n82db-b.css';
import '../../css/a/aayjedc9t.css';
import '../../css/n/nw7lymojt.css';
import '../../css/h/hp6lf5bwd.css';
import '../../css/k/kze3l_2bh.css';
import '../../css/e/ezm4tij9w.css';
import '../../css/z/zlf1r5b1p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="fj3gwwbrx"/><rect class="qrgarccrc"/><rect class="x9n82db-b"/><rect class="aayjedc9t"/><path class="nw7lymojt"/><path class="hp6lf5bwd"/><path class="kze3l_2bh"/><path class="ezm4tij9w"/><path class="zlf1r5b1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pay-code-one"} {...others} />);
}

export default Component;
