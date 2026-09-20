import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6ttljdjc.css';
import '../../css/a/au4yi6t5i.css';
import '../../css/r/rrj4wo6bv.css';
import '../../css/a/ahyo3ab-v.css';
import '../../css/c/c_llewb3b.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/h/hsh390bvd.css';
import '../../css/f/fkkmdob_y.css';
import '../../css/b/bwv9ofbsi.css';
import '../../css/h/h2pszgbkk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g6ttljdjc"/><path class="au4yi6t5i"/><path class="rrj4wo6bv"/><circle class="ahyo3ab-v"/><path class="c_llewb3b"/><g class="brzn_0bpr"><circle class="hsh390bvd"/><path class="fkkmdob_y"/><path class="bwv9ofbsi"/><path class="h2pszgbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:yen-banknote"} {...others} />);
}

export default Component;
