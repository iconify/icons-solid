import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d47f8u.css';
import '../../css/g/g_1xrq.css';
import '../../css/y/yuzzkf.css';
import '../../css/z/zxndow.css';
import '../../css/q/qc_pkd.css';
import '../../css/t/t60gks.css';
import '../../css/u/uv8ddv.css';
import '../../css/r/r6-a4j.css';
import '../../css/n/nsraqz.css';
import '../../css/t/t-ne3j.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/d/d-e0pf-z.css';
import '../../css/t/tr-7ecuqx.css';
import '../../css/d/d-h46djy.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG6cEJsdFA"><path class="d47f8u g_1xrq yuzzkf zxndow"/><path class="g_1xrq qc_pkd t60gks uv8ddv"/><path class="g_1xrq t60gks yuzzkf zxndow"/><circle class="r6-a4j"/><path class="g_1xrq nsraqz qc_pkd t-ne3j yuzzkf"/></mask></defs><path mask="url(#SVG6cEJsdFA)" class="botfzx"/><path class="g_1xrq gd_4-q t-ne3j yuzzkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:map-marker-multiple-alt-off-loop"} {...others} />);
}

export default Component;
