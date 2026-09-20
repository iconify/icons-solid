import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqcdsoh4h.css';
import '../../css/i/i0333fbud.css';
import '../../css/n/n6cuv8bhy.css';
import '../../css/g/g_bv2r-7z.css';
import '../../css/p/p45n56bfq.css';
import '../../css/s/sgj4lac9m.css';
import '../../css/b/bnk72cb2h.css';
import '../../css/w/wgoainkts.css';
import '../../css/b/b_vbndibo.css';
import '../../css/n/n29ja5-0t.css';
import '../../css/e/e00hyybiu.css';
import '../../css/a/artixtdso.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="tqcdsoh4h"/><ellipse class="i0333fbud"/><path class="n6cuv8bhy"/><ellipse class="g_bv2r-7z"/><path class="p45n56bfq"/><circle class="sgj4lac9m"/><circle class="bnk72cb2h"/><circle class="wgoainkts"/><circle class="b_vbndibo"/><circle class="n29ja5-0t"/><circle class="e00hyybiu"/><path class="artixtdso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:lady-beetle"} {...others} />);
}

export default Component;
