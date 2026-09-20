import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_f296i0j.css';
import '../../css/a/aewno-z1z.css';
import '../../css/c/ck26us2pg.css';
import '../../css/w/wi_o72b7j.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/s/s5e6_jbbc.css';
import '../../css/p/p9szpl62x.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/j/jsyfaqb7u.css';
import '../../css/e/eyb7ldb1v.css';
import '../../css/b/b3ugnfcdd.css';
import '../../css/r/rahxi6b_b.css';
import '../../css/c/chc0zbc-d.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="m_f296i0j"/><path class="aewno-z1z"/><path class="ck26us2pg"/><path class="wi_o72b7j"/><g class="x4u8pbwjc"><circle class="s5e6_jbbc"/><circle class="p9szpl62x"/></g><g class="brzn_0bpr"><path class="jsyfaqb7u"/><path class="eyb7ldb1v"/><path class="b3ugnfcdd"/><circle class="rahxi6b_b"/><circle class="chc0zbc-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:assembly-point"} {...others} />);
}

export default Component;
