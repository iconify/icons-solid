import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e26382krx.css';
import '../../css/g/go8d8xbng.css';
import '../../css/x/x_dohzbxr.css';
import '../../css/n/nrq4j3bnd.css';
import '../../css/c/cq8w_lb1f.css';
import '../../css/v/v4bzu2blw.css';
import '../../css/p/pbu0kib4w.css';
import '../../css/m/mdmuobbsd.css';
import '../../css/j/j8v_x7bxz.css';
import '../../css/t/tul_kj4rv.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/m/mn_7utkxt.css';
import '../../css/z/zj2o__b5x.css';
import '../../css/v/v4hfqds2r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e26382krx"/><path class="go8d8xbng"/><path class="x_dohzbxr"/><path class="nrq4j3bnd"/><path class="cq8w_lb1f"/><path class="v4bzu2blw"/><path class="pbu0kib4w"/><path class="mdmuobbsd"/><path class="j8v_x7bxz"/><path class="tul_kj4rv"/><g class="brzn_0bpr"><path class="mn_7utkxt"/><path class="zj2o__b5x"/><path class="v4hfqds2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tokyo-tower"} {...others} />);
}

export default Component;
