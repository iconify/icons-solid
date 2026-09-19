import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sjx1wvlrw.css';
import '../../css/x/xjzgsiu7q.css';
import '../../css/y/yz_d2nbzs.css';
import '../../css/j/jqt6tlb5m.css';
import '../../css/z/ztdz5j76u.css';
import '../../css/h/h2geodb9t.css';
import '../../css/d/dz-yovb0d.css';
import '../../css/t/twyk1jbzn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="sjx1wvlrw"/><path class="xjzgsiu7q"/><path class="yz_d2nbzs"/><path class="jqt6tlb5m"/><path class="ztdz5j76u"/><path class="h2geodb9t"/><path clip-rule="evenodd" class="dz-yovb0d"/><path clip-rule="evenodd" class="twyk1jbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:imbalance"} {...others} />);
}

export default Component;
