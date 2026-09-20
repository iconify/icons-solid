import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_1xrq.css';
import '../../css/k/kw9ssi.css';
import '../../css/y/yuzzkf.css';
import '../../css/z/zxndow.css';
import '../../css/p/pwds4w.css';
import '../../css/q/qc_pkd.css';
import '../../css/u/uv8ddv.css';
import '../../css/b/b45h2f.css';
import '../../css/n/nsraqz.css';
import '../../css/t/tbv09e.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-48.css';
import '../../css/t/tr-7ecuqx.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGUaJJlcYB"><path class="g_1xrq kw9ssi yuzzkf zxndow"/><path class="g_1xrq pwds4w qc_pkd uv8ddv"/><path class="g_1xrq pwds4w yuzzkf zxndow"/><circle class="b45h2f"/><path class="g_1xrq nsraqz qc_pkd tbv09e yuzzkf"/></mask></defs><path mask="url(#SVGUaJJlcYB)" class="botfzx"/><path class="g_1xrq gd_4-q tbv09e yuzzkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:map-marker-multiple-off-loop"} {...others} />);
}

export default Component;
