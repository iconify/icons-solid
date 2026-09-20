import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3bfvtzht.css';
import '../../css/e/er-0fccva.css';
import '../../css/t/t0l0x3p3y.css';
import '../../css/z/zylb25bqz.css';
import '../../css/n/n4t_cxb_q.css';
import '../../css/r/rsyv-7b5z.css';
import '../../css/b/bnft9ccan.css';
import '../../css/e/etpbdd6ko.css';
import '../../css/a/aaj3k9bcg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z3bfvtzht"/><path class="er-0fccva"/><path class="t0l0x3p3y"/><circle class="zylb25bqz"/><circle class="n4t_cxb_q"/><path class="rsyv-7b5z"/><path class="bnft9ccan"/><path class="etpbdd6ko"/><path class="aaj3k9bcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wolf"} {...others} />);
}

export default Component;
