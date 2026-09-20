import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fapnrobrl.css';
import '../../css/e/e_3wtzq7u.css';
import '../../css/i/iryatv0oc.css';
import '../../css/n/nlvjfqnrh.css';
import '../../css/l/l-jv0nrxe.css';
import '../../css/u/uyvafgbrw.css';
import '../../css/z/zc-4xub_o.css';
import '../../css/c/ctpstyt3g.css';
import '../../css/z/zxeav0r8k.css';
import '../../css/q/qq25dxbbw.css';
import '../../css/r/r26-6tb1y.css';
import '../../css/q/qr-t8sbkc.css';
import '../../css/s/spb-chboi.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="fapnrobrl"><path class="e_3wtzq7u"/><path class="iryatv0oc"/></g><path class="nlvjfqnrh"/><path class="l-jv0nrxe"/><path class="uyvafgbrw"/><circle class="zc-4xub_o"/><circle class="ctpstyt3g"/><circle class="zxeav0r8k"/><circle class="qq25dxbbw"/><circle class="r26-6tb1y"/><circle class="qr-t8sbkc"/><path class="spb-chboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:video-game"} {...others} />);
}

export default Component;
